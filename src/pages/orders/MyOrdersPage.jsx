import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  ShoppingCart, 
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { orderApi } from '../../services/api';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/Badge';
import { PageLoader } from '../../components/ui/Spinner';
import { EmptyState } from '../../components/ui/EmptyState';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { formatCurrency, formatDate, formatDateTime } from '../../utils/helpers';
import { MEAL_TYPE_LABELS, ORDER_STATUS } from '../../utils/constants';

export default function MyOrdersPage() {
  const { userData } = useAuth();
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: ''
  });

  // Fetch my orders
  const { data: ordersData, isLoading } = useQuery({
    queryKey: ['myOrders', filters],
    queryFn: () => orderApi.getMyOrders(filters)
  });

  const orders = ordersData?.data?.orders || [];

  // Group orders by date
  const groupedOrders = orders.reduce((acc, order) => {
    const date = order.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(order);
    return acc;
  }, {});

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
          <h1 className="text-2xl font-bold text-secondary-900">My Orders</h1>
          <p className="text-secondary-600 mt-1">
            View your order history
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4">
              <Input
                type="date"
                placeholder="Start Date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="w-40"
              />
              <Input
                type="date"
                placeholder="End Date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="w-40"
              />
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="input w-40"
              >
                <option value="">All Status</option>
                {Object.entries(ORDER_STATUS).map(([key, value]) => (
                  <option key={value} value={value}>{key}</option>
                ))}
              </select>
              <Button 
                variant="secondary"
                onClick={() => setFilters({ startDate: '', endDate: '', status: '' })}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders */}
        {orders.length === 0 ? (
          <EmptyState
            icon={ShoppingCart}
            title="No Orders Found"
            description="You haven't placed any orders yet. Start ordering delicious food!"
            action={
              <Button onClick={() => window.location.href = '/order'}>
                Order Now
              </Button>
            }
          />
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedOrders)
              .sort(([a], [b]) => new Date(b) - new Date(a))
              .map(([date, dateOrders]) => (
                <div key={date}>
                  <h2 className="text-sm font-medium text-secondary-500 mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(date, 'EEEE, dd MMMM yyyy')}
                  </h2>
                  <div className="space-y-3">
                    {dateOrders.map((order) => (
                      <Card key={order.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                                {MEAL_TYPE_LABELS[order.mealType]}
                              </span>
                              <p className="text-xs text-secondary-500 mt-1">
                                {formatDateTime(order.createdAt)}
                              </p>
                            </div>
                            <StatusBadge status={order.status} />
                          </div>

                          {/* Items */}
                          <div className="space-y-2 mb-3">
                            {order.items?.map((item, index) => (
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

                          {/* Total */}
                          <div className="flex justify-between pt-3 border-t border-secondary-100">
                            <span className="font-medium text-secondary-900">Total</span>
                            <span className="font-bold text-primary-600">
                              {formatCurrency(order.total)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
