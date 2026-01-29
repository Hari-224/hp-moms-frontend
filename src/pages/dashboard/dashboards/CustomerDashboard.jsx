import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  ChefHat, 
  ShoppingCart, 
  Receipt, 
  MessageSquare,
  ArrowRight,
  Clock,
  IndianRupee
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { menuApi, orderApi, billingApi } from '../../../services/api';
import { useAppStore } from '../../../store';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { StatusBadge } from '../../../components/ui/Badge';
import { PageLoader } from '../../../components/ui/Spinner';
import Button from '../../../components/ui/Button';
import { formatCurrency, formatDate, formatTime } from '../../../utils/helpers';
import { ROUTES, MEAL_TYPE_LABELS } from '../../../utils/constants';

export default function CustomerDashboard() {
  const { userData } = useAuth();
  const { selectedHouseId } = useAppStore();
  const houseId = selectedHouseId || userData?.houseId;
  const agencyId = userData?.agencyId;

  const today = new Date().toISOString().split('T')[0];

  // Fetch today's menu
  const { data: menuData, isLoading: menuLoading } = useQuery({
    queryKey: ['dailyMenu', agencyId, today],
    queryFn: () => menuApi.getDailyMenu(agencyId, today),
    enabled: !!agencyId
  });

  // Fetch my orders
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['myOrders'],
    queryFn: () => orderApi.getMyOrders({ limit: 5 })
  });

  // Fetch my bills
  const { data: billsData, isLoading: billsLoading } = useQuery({
    queryKey: ['myBills'],
    queryFn: () => billingApi.getMyBills({ limit: 3 })
  });

  const isLoading = menuLoading || ordersLoading || billsLoading;
  const todayMenu = menuData?.data?.menu || {};
  const recentOrders = ordersData?.data?.orders || [];
  const recentBills = billsData?.data?.bills || [];

  // Get next available meal
  const getNextMeal = () => {
    const hour = new Date().getHours();
    if (hour < 9) return 'breakfast';
    if (hour < 13) return 'lunch';
    if (hour < 17) return 'snacks';
    return 'dinner';
  };

  const nextMeal = getNextMeal();
  const nextMealItems = todayMenu[nextMeal] || [];

  if (isLoading) return <PageLoader />;

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">
          Hello, {userData?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-secondary-600 mt-1">
          What would you like to eat today?
        </p>
      </div>

      {/* Order CTA */}
      <Card className="bg-gradient-to-r from-primary-500 to-primary-600 border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h2 className="text-xl font-bold">Ready to Order?</h2>
              <p className="opacity-90 mt-1">
                {nextMealItems.length > 0 
                  ? `${MEAL_TYPE_LABELS[nextMeal]} menu is available!`
                  : 'Check out today\'s menu'}
              </p>
            </div>
            <Link to={ROUTES.ORDER}>
              <Button variant="secondary" size="lg">
                <ChefHat className="h-5 w-5 mr-2" />
                Order Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Today's Menu Preview */}
      {nextMealItems.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{MEAL_TYPE_LABELS[nextMeal]} Menu</CardTitle>
            <Link to={ROUTES.ORDER}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nextMealItems.slice(0, 4).map((item) => (
                <div 
                  key={item.id} 
                  className="p-3 bg-secondary-50 rounded-lg text-center"
                >
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                  )}
                  <p className="font-medium text-secondary-900 text-sm">{item.name}</p>
                  <p className="text-primary-600 font-semibold">{formatCurrency(item.price)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Link to={ROUTES.MY_ORDERS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentOrders.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No orders yet</p>
                <Link to={ROUTES.ORDER}>
                  <Button variant="primary" size="sm" className="mt-3">
                    Place Your First Order
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div 
                    key={order.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">
                        {formatDate(order.date)} - {MEAL_TYPE_LABELS[order.mealType]}
                      </p>
                      <p className="text-sm text-secondary-500">
                        {order.items?.length || 0} items • {formatCurrency(order.total)}
                      </p>
                    </div>
                    <StatusBadge status={order.status} />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Bills */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Bills</CardTitle>
            <Link to={ROUTES.MY_BILLS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentBills.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <Receipt className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No bills yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentBills.map((bill) => (
                  <div 
                    key={bill.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">
                        {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                      </p>
                      <p className="text-sm text-secondary-500">
                        {bill.itemCount || 0} orders
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-secondary-900">
                        {formatCurrency(bill.totalAmount)}
                      </p>
                      <StatusBadge status={bill.status} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link to={ROUTES.ORDER}>
              <Button variant="outline" className="w-full justify-start">
                <ChefHat className="h-4 w-4 mr-2" />
                Order Food
              </Button>
            </Link>
            <Link to={ROUTES.MY_ORDERS}>
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                My Orders
              </Button>
            </Link>
            <Link to={ROUTES.MY_BILLS}>
              <Button variant="outline" className="w-full justify-start">
                <Receipt className="h-4 w-4 mr-2" />
                My Bills
              </Button>
            </Link>
            <Link to={ROUTES.CHAT}>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                House Chat
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
