import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  ShoppingBag, 
  Calendar,
  Eye,
  Check,
  X,
  Clock,
  ChefHat
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { orderApi, houseApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate, formatDateTime } from '../../utils/helpers';
import { MEAL_TYPE_LABELS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function HouseOrdersPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [filterMeal, setFilterMeal] = useState('');

  const houseId = userData?.houseId;

  // Fetch orders
  const { data: ordersData, isLoading } = useQuery({
    queryKey: ['houseOrders', houseId, filterDate, filterMeal],
    queryFn: () => orderApi.getHouseOrders(houseId, {
      date: filterDate || undefined,
      mealType: filterMeal || undefined
    }),
    enabled: !!houseId
  });

  const orders = ordersData?.data?.orders || [];

  // Calculate summary
  const summary = orders.reduce((acc, order) => {
    acc.count++;
    acc.total += order.totalAmount || 0;
    if (order.status === 'delivered') acc.delivered++;
    return acc;
  }, { count: 0, total: 0, delivered: 0 });

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
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">House Orders</h1>
          <p className="text-secondary-600 mt-1">
            Track all orders from house members
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Orders</p>
              <p className="text-2xl font-bold text-secondary-900">{summary.count}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Delivered</p>
              <p className="text-2xl font-bold text-success-600">{summary.delivered}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-secondary-500">Total Value</p>
              <p className="text-2xl font-bold text-primary-600">
                {formatCurrency(summary.total)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4 flex-wrap">
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="input w-40"
              />
              <select
                value={filterMeal}
                onChange={(e) => setFilterMeal(e.target.value)}
                className="input w-40"
              >
                <option value="">All Meals</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Orders list */}
        {orders.length === 0 ? (
          <EmptyState
            icon={ShoppingBag}
            title="No Orders Found"
            description="No orders placed for the selected date"
          />
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <ChefHat className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          {order.memberName}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-secondary-500">
                          <Badge variant="secondary" size="sm">
                            {MEAL_TYPE_LABELS[order.mealType]}
                          </Badge>
                          <span>{order.items?.length || 0} items</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-lg font-bold text-secondary-900">
                          {formatCurrency(order.totalAmount)}
                        </p>
                        <p className="text-sm text-secondary-500">
                          {formatDateTime(order.createdAt)}
                        </p>
                      </div>
                      <StatusBadge status={order.status} />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      <Modal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title="Order Details"
        size="md"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-secondary-500">Ordered By</p>
                <p className="font-medium">{selectedOrder.memberName}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Meal</p>
                <Badge variant="secondary">
                  {MEAL_TYPE_LABELS[selectedOrder.mealType]}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Date</p>
                <p className="font-medium">{formatDate(selectedOrder.orderDate)}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Status</p>
                <StatusBadge status={selectedOrder.status} />
              </div>
            </div>

            {/* Items */}
            <div className="border-t border-secondary-200 pt-4">
              <h4 className="font-medium text-secondary-900 mb-3">Items</h4>
              <div className="space-y-2">
                {selectedOrder.items?.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 bg-secondary-50 px-3 rounded">
                    <span>{item.name} × {item.quantity}</span>
                    <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="flex justify-between text-lg">
                <span className="font-medium">Total</span>
                <span className="font-bold text-primary-600">
                  {formatCurrency(selectedOrder.totalAmount)}
                </span>
              </div>
            </div>

            {selectedOrder.notes && (
              <div className="bg-secondary-50 p-3 rounded-lg">
                <p className="text-sm text-secondary-500">Notes</p>
                <p className="text-secondary-700">{selectedOrder.notes}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </Layout>
  );
}
