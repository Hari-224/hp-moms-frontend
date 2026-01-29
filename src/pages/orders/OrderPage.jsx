import { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  ChefHat, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Clock,
  AlertCircle,
  Check
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { menuApi, orderApi } from '../../services/api';
import { useCartStore, useAppStore } from '../../store';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { Alert } from '../../components/ui/Alert';
import Button from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { formatCurrency, formatTime } from '../../utils/helpers';
import { MEAL_TYPES, MEAL_TYPE_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function OrderPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const { activeDate, setActiveDate } = useAppStore();
  const { items, addItem, updateQuantity, removeItem, clearCart, getTotal, getItemCount } = useCartStore();
  
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const agencyId = userData?.agencyId;
  const houseId = userData?.houseId;
  const today = new Date().toISOString().split('T')[0];

  // Fetch today's menu
  const { data: menuData, isLoading } = useQuery({
    queryKey: ['dailyMenu', agencyId, today],
    queryFn: () => menuApi.getDailyMenu(agencyId, today),
    enabled: !!agencyId
  });

  // Place order mutation
  const placeOrderMutation = useMutation({
    mutationFn: (data) => orderApi.place(data),
    onSuccess: () => {
      toast.success('Order placed successfully!');
      clearCart();
      setShowConfirm(false);
      queryClient.invalidateQueries(['myOrders']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to place order');
    }
  });

  const menu = menuData?.data?.menu || {};
  const cutoffTimes = menuData?.data?.cutoffTimes || {};

  // Get available meal types
  const availableMeals = useMemo(() => {
    return Object.entries(MEAL_TYPES)
      .filter(([_, type]) => menu[type]?.length > 0)
      .map(([key, type]) => ({
        type,
        label: MEAL_TYPE_LABELS[type],
        items: menu[type] || [],
        cutoff: cutoffTimes[type],
        isLocked: menu[`${type}Locked`]
      }));
  }, [menu, cutoffTimes]);

  // Check if meal is past cutoff
  const isPastCutoff = (cutoffTime) => {
    if (!cutoffTime) return false;
    const now = new Date();
    const [hours, minutes] = cutoffTime.split(':').map(Number);
    const cutoff = new Date();
    cutoff.setHours(hours, minutes, 0, 0);
    return now > cutoff;
  };

  // Handle add to cart
  const handleAddToCart = (item, mealType) => {
    addItem({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      mealType
    });
    toast.success(`${item.name} added to cart`);
  };

  // Get cart item quantity
  const getCartQuantity = (itemId) => {
    const item = items.find(i => i.menuItemId === itemId);
    return item?.quantity || 0;
  };

  // Handle checkout
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    setShowConfirm(true);
  };

  // Confirm order
  const confirmOrder = () => {
    // Group items by meal type
    const ordersByMeal = items.reduce((acc, item) => {
      if (!acc[item.mealType]) {
        acc[item.mealType] = [];
      }
      acc[item.mealType].push({
        menuItemId: item.menuItemId,
        name: item.name,
        quantity: item.quantity,
        priceAtOrder: item.price
      });
      return acc;
    }, {});

    // Place order for each meal type
    Object.entries(ordersByMeal).forEach(([mealType, orderItems]) => {
      placeOrderMutation.mutate({
        houseId,
        agencyId,
        date: today,
        mealType,
        items: orderItems
      });
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Order Food</h1>
            <p className="text-secondary-600 mt-1">
              Today's menu - {new Date().toLocaleDateString('en-IN', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>
          
          {/* Cart button */}
          {getItemCount() > 0 && (
            <Button onClick={handleCheckout} className="relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              View Cart ({getItemCount()})
              <span className="ml-2 font-semibold">{formatCurrency(getTotal())}</span>
            </Button>
          )}
        </div>

        {/* Meal type tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {availableMeals.map((meal) => (
            <button
              key={meal.type}
              onClick={() => setSelectedMeal(selectedMeal === meal.type ? null : meal.type)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedMeal === meal.type
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {meal.label}
              {meal.isLocked && (
                <Badge variant="danger" size="sm" className="ml-2">Locked</Badge>
              )}
            </button>
          ))}
        </div>

        {/* Menu items */}
        {availableMeals.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <ChefHat className="h-16 w-16 mx-auto mb-4 text-secondary-300" />
              <h3 className="text-lg font-medium text-secondary-900 mb-2">
                No Menu Available
              </h3>
              <p className="text-secondary-500">
                Today's menu hasn't been published yet. Check back later!
              </p>
            </CardContent>
          </Card>
        ) : (
          availableMeals
            .filter(meal => !selectedMeal || selectedMeal === meal.type)
            .map((meal) => (
              <Card key={meal.type}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>{meal.label}</CardTitle>
                    {meal.cutoff && (
                      <p className="text-sm text-secondary-500 mt-1 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Cutoff: {meal.cutoff}
                        {isPastCutoff(meal.cutoff) && (
                          <Badge variant="danger" size="sm" className="ml-2">Past cutoff</Badge>
                        )}
                      </p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {meal.isLocked || isPastCutoff(meal.cutoff) ? (
                    <Alert variant="warning">
                      <AlertCircle className="h-4 w-4" />
                      <span className="ml-2">
                        Orders for {meal.label.toLowerCase()} are no longer accepted.
                      </span>
                    </Alert>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {meal.items.map((item) => {
                        const cartQty = getCartQuantity(item.id);
                        
                        return (
                          <div 
                            key={item.id}
                            className="bg-secondary-50 rounded-lg p-4 flex flex-col"
                          >
                            {item.imageUrl && (
                              <img 
                                src={item.imageUrl} 
                                alt={item.name}
                                className="w-full h-32 object-cover rounded-lg mb-3"
                              />
                            )}
                            <div className="flex-1">
                              <h4 className="font-medium text-secondary-900">{item.name}</h4>
                              {item.description && (
                                <p className="text-sm text-secondary-500 mt-1">{item.description}</p>
                              )}
                              <p className="text-lg font-bold text-primary-600 mt-2">
                                {formatCurrency(item.price)}
                              </p>
                            </div>
                            
                            <div className="mt-3">
                              {cartQty === 0 ? (
                                <Button 
                                  variant="outline" 
                                  className="w-full"
                                  onClick={() => handleAddToCart(item, meal.type)}
                                >
                                  <Plus className="h-4 w-4 mr-1" />
                                  Add
                                </Button>
                              ) : (
                                <div className="flex items-center justify-between bg-white rounded-lg border border-secondary-200 p-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, cartQty - 1)}
                                    className="p-2 text-secondary-600 hover:text-danger-600"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="font-medium text-secondary-900">{cartQty}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, cartQty + 1)}
                                    className="p-2 text-secondary-600 hover:text-success-600"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
        )}
      </div>

      {/* Order Confirmation Modal */}
      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Confirm Order"
        size="md"
      >
        <div className="space-y-4">
          {/* Order items */}
          <div className="divide-y divide-secondary-100">
            {items.map((item) => (
              <div key={item.menuItemId} className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-secondary-900">{item.name}</p>
                  <p className="text-sm text-secondary-500">
                    {formatCurrency(item.price)} × {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-secondary-900">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-secondary-200 pt-4 flex justify-between">
            <span className="text-lg font-semibold text-secondary-900">Total</span>
            <span className="text-lg font-bold text-primary-600">{formatCurrency(getTotal())}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button 
              variant="secondary" 
              className="flex-1"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1"
              onClick={confirmOrder}
              isLoading={placeOrderMutation.isPending}
            >
              <Check className="h-4 w-4 mr-2" />
              Confirm Order
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
