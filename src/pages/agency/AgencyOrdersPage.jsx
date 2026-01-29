import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  ShoppingCart, 
  Calendar,
  Clock,
  Filter,
  Check,
  X,
  Eye,
  ChefHat
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { orderApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge, StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import { Modal } from '../../components/ui/Modal';
import Input, { Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate, formatTime, groupBy } from '../../utils/helpers';
import { MEAL_TYPE_LABELS, ORDER_STATUS } from '../../utils/constants';
import toast from 'react-hot-toast';

export default function AgencyOrdersPage() {
  const { userData } = useAuth();
  const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewMode, setViewMode] = useState('aggregated'); // aggregated | individual

  const agencyId = userData?.agencyId;

  // Fetch orders
  const { data: ordersData, isLoading } = useQuery({
    queryKey: ['agencyOrders', agencyId, selectedDate, selectedMealType],
    queryFn: () => orderApi.getAgencyOrders(agencyId, { 
      date: selectedDate,
      mealType: selectedMealType || undefined
    }),
    enabled: !!agencyId
  });

  // Fetch aggregated orders
  const { data: aggregatedData, isLoading: aggLoading } = useQuery({
    queryKey: ['aggregatedOrders', agencyId, selectedDate, selectedMealType],
    queryFn: () => orderApi.getAggregated(agencyId, selectedDate, selectedMealType || 'lunch'),
    enabled: !!agencyId && viewMode === 'aggregated'
  });

  // Update order status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ orderId, status }) => orderApi.updateStatus(orderId, status),
    onSuccess: () => {
      toast.success('Order status updated!');
      queryClient.invalidateQueries(['agencyOrders']);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update status');
    }
  });

  const orders = ordersData?.data?.orders || [];
  const aggregated = aggregatedData?.data?.aggregated || {};

  // Group orders by house
  const ordersByHouse = groupBy(orders, 'houseName');

  // Group orders by meal type
  const ordersByMeal = groupBy(orders, 'mealType');

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
            <h1 className="text-2xl font-bold text-secondary-900">Orders</h1>
            <p className="text-secondary-600 mt-1">
              View and manage orders from all houses
            </p>
          </div>
        </div>

        {/* Filters */}
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
              <select
                value={selectedMealType}
                onChange={(e) => setSelectedMealType(e.target.value)}
                className="input w-40"
              >
                <option value="">All Meals</option>
                {Object.entries(MEAL_TYPE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <div className="flex gap-2 ml-auto">
                <Button
                  variant={viewMode === 'aggregated' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('aggregated')}
                >
                  Aggregated
                </Button>
                <Button
                  variant={viewMode === 'individual' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setViewMode('individual')}
                >
                  Individual
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aggregated View */}
        {viewMode === 'aggregated' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(MEAL_TYPE_LABELS).map(([mealType, label]) => {
              const mealOrders = orders.filter(o => o.mealType === mealType);
              const totalItems = mealOrders.reduce((sum, o) => 
                sum + (o.items?.reduce((s, i) => s + i.quantity, 0) || 0), 0
              );
              const totalAmount = mealOrders.reduce((sum, o) => sum + (o.total || 0), 0);

              // Aggregate items
              const itemAggregation = {};
              mealOrders.forEach(order => {
                order.items?.forEach(item => {
                  if (!itemAggregation[item.name]) {
                    itemAggregation[item.name] = { quantity: 0, total: 0 };
                  }
                  itemAggregation[item.name].quantity += item.quantity;
                  itemAggregation[item.name].total += item.quantity * item.priceAtOrder;
                });
              });

              return (
                <Card key={mealType}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{label}</CardTitle>
                    <p className="text-sm text-secondary-500">
                      {mealOrders.length} orders • {totalItems} items
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-2xl font-bold text-primary-600 mb-3">
                      {formatCurrency(totalAmount)}
                    </div>
                    {Object.keys(itemAggregation).length > 0 && (
                      <div className="space-y-1 text-sm border-t border-secondary-100 pt-3">
                        {Object.entries(itemAggregation)
                          .sort((a, b) => b[1].quantity - a[1].quantity)
                          .slice(0, 5)
                          .map(([name, data]) => (
                            <div key={name} className="flex justify-between">
                              <span className="text-secondary-600">{name}</span>
                              <span className="font-medium">×{data.quantity}</span>
                            </div>
                          ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Individual Orders View */}
        {viewMode === 'individual' && (
          <>
            {orders.length === 0 ? (
              <EmptyState
                icon={ShoppingCart}
                title="No Orders Found"
                description={`No orders for ${formatDate(selectedDate, 'dd MMMM yyyy')}`}
              />
            ) : (
              <div className="space-y-6">
                {Object.entries(ordersByHouse).map(([houseName, houseOrders]) => (
                  <Card key={houseName}>
                    <CardHeader>
                      <CardTitle>{houseName}</CardTitle>
                      <p className="text-sm text-secondary-500">
                        {houseOrders.length} orders • {formatCurrency(
                          houseOrders.reduce((sum, o) => sum + (o.total || 0), 0)
                        )}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {houseOrders.map((order) => (
                          <div 
                            key={order.id}
                            className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-secondary-900">
                                  {order.customerName}
                                </span>
                                <Badge variant="info" size="sm">
                                  {MEAL_TYPE_LABELS[order.mealType]}
                                </Badge>
                              </div>
                              <p className="text-sm text-secondary-500">
                                {order.items?.length || 0} items • {formatTime(order.createdAt)}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-secondary-900">
                                {formatCurrency(order.total)}
                              </span>
                              <StatusBadge status={order.status} />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedOrder(order)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
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
            {/* Customer info */}
            <div className="flex justify-between py-2 border-b border-secondary-100">
              <span className="text-secondary-500">Customer</span>
              <span className="font-medium text-secondary-900">
                {selectedOrder.customerName}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-secondary-100">
              <span className="text-secondary-500">House</span>
              <span className="font-medium text-secondary-900">
                {selectedOrder.houseName}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-secondary-100">
              <span className="text-secondary-500">Meal</span>
              <Badge variant="info">
                {MEAL_TYPE_LABELS[selectedOrder.mealType]}
              </Badge>
            </div>
            <div className="flex justify-between py-2 border-b border-secondary-100">
              <span className="text-secondary-500">Status</span>
              <StatusBadge status={selectedOrder.status} />
            </div>

            {/* Items */}
            <div>
              <h4 className="font-medium text-secondary-900 mb-2">Items</h4>
              <div className="space-y-2">
                {selectedOrder.items?.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-secondary-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-secondary-900">
                      {formatCurrency(item.priceAtOrder * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between pt-3 border-t border-secondary-200">
              <span className="font-semibold text-secondary-900">Total</span>
              <span className="font-bold text-primary-600">
                {formatCurrency(selectedOrder.total)}
              </span>
            </div>

            {/* Actions */}
            {selectedOrder.status === 'placed' && (
              <div className="flex gap-3 pt-4">
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={() => {
                    updateStatusMutation.mutate({
                      orderId: selectedOrder.id,
                      status: 'cancelled'
                    });
                    setSelectedOrder(null);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    updateStatusMutation.mutate({
                      orderId: selectedOrder.id,
                      status: 'confirmed'
                    });
                    setSelectedOrder(null);
                  }}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Confirm
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </Layout>
  );
}
