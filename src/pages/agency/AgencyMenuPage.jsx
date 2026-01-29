import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  ChefHat, 
  Plus, 
  Edit,
  Trash2,
  Calendar,
  Clock,
  Lock,
  Unlock,
  Save,
  Check
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { menuApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal, ConfirmModal } from '../../components/ui/Modal';
import Input, { Textarea, Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { MEAL_TYPES, MEAL_TYPE_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

const menuItemSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  description: z.string().optional(),
  price: z.string().min(1, 'Price is required'),
  category: z.string().min(1, 'Category is required')
});

export default function AgencyMenuPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [showItemModal, setShowItemModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedMealType, setSelectedMealType] = useState('lunch');

  const agencyId = userData?.agencyId;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(menuItemSchema)
  });

  // Fetch menu items (master catalog)
  const { data: itemsData, isLoading: itemsLoading } = useQuery({
    queryKey: ['menuItems', agencyId],
    queryFn: () => menuApi.getItems(agencyId),
    enabled: !!agencyId
  });

  // Fetch daily menu
  const { data: dailyMenuData, isLoading: dailyLoading } = useQuery({
    queryKey: ['dailyMenu', agencyId, selectedDate],
    queryFn: () => menuApi.getDailyMenu(agencyId, selectedDate),
    enabled: !!agencyId
  });

  // Create menu item mutation
  const createItemMutation = useMutation({
    mutationFn: (data) => menuApi.createItem(agencyId, { 
      ...data, 
      price: parseFloat(data.price) 
    }),
    onSuccess: () => {
      toast.success('Menu item created!');
      setShowItemModal(false);
      reset();
      queryClient.invalidateQueries(['menuItems']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create item');
    }
  });

  // Delete menu item mutation
  const deleteItemMutation = useMutation({
    mutationFn: (itemId) => menuApi.deleteItem(itemId),
    onSuccess: () => {
      toast.success('Menu item deleted!');
      queryClient.invalidateQueries(['menuItems']);
      queryClient.invalidateQueries(['dailyMenu']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete item');
    }
  });

  // Publish daily menu mutation
  const publishMenuMutation = useMutation({
    mutationFn: (data) => menuApi.publishDailyMenu(data),
    onSuccess: () => {
      toast.success('Menu updated!');
      queryClient.invalidateQueries(['dailyMenu']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update menu');
    }
  });

  // Lock menu mutation
  const lockMenuMutation = useMutation({
    mutationFn: ({ mealType }) => menuApi.lockMenu(agencyId, selectedDate, mealType),
    onSuccess: () => {
      toast.success('Menu locked!');
      queryClient.invalidateQueries(['dailyMenu']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to lock menu');
    }
  });

  // Unlock menu mutation
  const unlockMenuMutation = useMutation({
    mutationFn: ({ mealType }) => menuApi.unlockMenu(agencyId, selectedDate, mealType),
    onSuccess: () => {
      toast.success('Menu unlocked!');
      queryClient.invalidateQueries(['dailyMenu']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to unlock menu');
    }
  });

  const isLoading = itemsLoading || dailyLoading;
  const menuItems = itemsData?.data?.items || [];
  const dailyMenus = dailyMenuData?.data?.menus || {};
  const cutoffTimes = dailyMenuData?.data?.cutoffTimes || {};

  // Get menu for current meal type
  const currentMealMenu = dailyMenus[selectedMealType];
  const currentMealItems = currentMealMenu?.items || [];
  const isLocked = currentMealMenu?.locked || false;

  // Check if item is in daily menu
  const isItemInDailyMenu = (itemId) => currentMealItems.some(mi => mi.id === itemId);

  const onSubmitItem = (data) => {
    createItemMutation.mutate(data);
  };

  // Toggle item in daily menu (add or remove)
  const handleToggleInDaily = (item) => {
    const isInMenu = isItemInDailyMenu(item.id);
    let updatedItems;
    
    if (isInMenu) {
      // Remove from daily menu
      updatedItems = currentMealItems.filter(i => i.id !== item.id);
    } else {
      // Add to daily menu
      updatedItems = [...currentMealItems, { id: item.id, name: item.name, price: item.price, category: item.category }];
    }
    
    publishMenuMutation.mutate({
      agencyId,
      date: selectedDate,
      mealType: selectedMealType,
      items: updatedItems.map(i => ({ id: i.id, available: true }))
    });
  };

  // Remove item from daily menu
  const handleRemoveFromDaily = (itemId) => {
    const updatedItems = currentMealItems.filter(i => i.id !== itemId);
    publishMenuMutation.mutate({
      agencyId,
      date: selectedDate,
      mealType: selectedMealType,
      items: updatedItems.map(i => ({ id: i.id, available: true }))
    });
  };

  const categoryOptions = [
    { value: 'main', label: 'Main Course' },
    { value: 'side', label: 'Side Dish' },
    { value: 'bread', label: 'Bread' },
    { value: 'rice', label: 'Rice' },
    { value: 'dessert', label: 'Dessert' },
    { value: 'beverage', label: 'Beverage' },
    { value: 'snack', label: 'Snack' }
  ];

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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Menu Management</h1>
            <p className="text-secondary-600 mt-1">
              Manage your menu items and daily menus
            </p>
          </div>
          <Button onClick={() => setShowItemModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </Button>
        </div>

        {/* Date and Meal Type Selection */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary-400" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-40"
                />
              </div>
              <div className="flex gap-2">
                {Object.entries(MEAL_TYPE_LABELS).map(([type, label]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedMealType(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedMealType === type
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Daily Menu */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>
                  {MEAL_TYPE_LABELS[selectedMealType]} Menu
                </CardTitle>
                <p className="text-sm text-secondary-500 mt-1">
                  {formatDate(selectedDate, 'EEEE, dd MMMM')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {cutoffTimes[selectedMealType] && (
                  <span className="text-sm text-secondary-500 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Cutoff: {cutoffTimes[selectedMealType]}
                  </span>
                )}
                {isLocked ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => unlockMenuMutation.mutate({ mealType: selectedMealType })}
                  >
                    <Lock className="h-4 w-4 mr-1" />
                    Unlock
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => lockMenuMutation.mutate({ mealType: selectedMealType })}
                    disabled={currentMealItems.length === 0}
                  >
                    <Unlock className="h-4 w-4 mr-1" />
                    Lock Menu
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {currentMealItems.length === 0 ? (
                <div className="text-center py-8 text-secondary-500">
                  <ChefHat className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No items in today's menu</p>
                  <p className="text-sm">Add items from the catalog</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {currentMealItems.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-secondary-900">{item.name}</p>
                        <p className="text-sm text-secondary-500">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-primary-600">
                          {formatCurrency(item.price)}
                        </span>
                        {!isLocked && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveFromDaily(item.id)}
                            className="text-danger-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Menu Catalog */}
          <Card>
            <CardHeader>
              <CardTitle>Menu Catalog</CardTitle>
              <p className="text-sm text-secondary-500">
                Click to add/remove items from today's menu
              </p>
            </CardHeader>
            <CardContent>
              {menuItems.length === 0 ? (
                <div className="text-center py-8 text-secondary-500">
                  <ChefHat className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No menu items yet</p>
                  <p className="text-sm mt-1">Click "Add Menu Item" to create items</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {menuItems.map((item) => {
                    const isInMenu = isItemInDailyMenu(item.id);
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                          isInMenu 
                            ? 'bg-primary-50 border-2 border-primary-300' 
                            : 'bg-secondary-50'
                        }`}
                      >
                        <button
                          onClick={() => handleToggleInDaily(item)}
                          disabled={isLocked}
                          className="flex-1 flex items-center justify-between text-left disabled:opacity-50"
                        >
                          <div>
                            <p className="font-medium text-secondary-900">{item.name}</p>
                            <p className="text-sm text-secondary-500">{item.category}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-primary-600">
                              {formatCurrency(item.price)}
                            </span>
                            {isInMenu ? (
                              <Check className="h-5 w-5 text-primary-600" />
                            ) : (
                              <Plus className="h-5 w-5 text-primary-600" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`Delete "${item.name}" from catalog?`)) {
                              deleteItemMutation.mutate(item.id);
                            }
                          }}
                          className="ml-2 p-2 text-danger-600 hover:bg-danger-50 rounded-lg transition-colors"
                          title="Delete from catalog"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Menu Item Modal */}
      <Modal
        isOpen={showItemModal}
        onClose={() => {
          setShowItemModal(false);
          setEditingItem(null);
          reset();
        }}
        title="Add Menu Item"
        size="md"
      >
        <form onSubmit={handleSubmit(onSubmitItem)} className="space-y-4">
          <Input
            label="Item Name"
            placeholder="Enter item name"
            error={errors.name?.message}
            {...register('name')}
          />

          <Textarea
            label="Description (Optional)"
            placeholder="Describe the item"
            {...register('description')}
          />

          <Input
            label="Price (₹)"
            type="number"
            step="0.01"
            placeholder="Enter price"
            error={errors.price?.message}
            {...register('price')}
          />

          <Select
            label="Category"
            options={categoryOptions}
            error={errors.category?.message}
            {...register('category')}
          />

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="secondary" 
              className="flex-1"
              onClick={() => {
                setShowItemModal(false);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              isLoading={createItemMutation.isPending}
            >
              <Save className="h-4 w-4 mr-2" />
              Save Item
            </Button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}
