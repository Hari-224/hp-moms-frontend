import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShoppingCart, 
  Receipt, 
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowRight,
  IndianRupee
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { agencyApi, orderApi, billingApi } from '../../../services/api';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Badge, StatusBadge } from '../../../components/ui/Badge';
import { PageLoader } from '../../../components/ui/Spinner';
import Button from '../../../components/ui/Button';
import { formatCurrency, formatDate, formatRelativeTime } from '../../../utils/helpers';
import { ROUTES } from '../../../utils/constants';

export default function AgencyDashboard() {
  const { userData } = useAuth();
  const agencyId = userData?.agencyId;

  // Fetch agency stats
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['agencyStats', agencyId],
    queryFn: () => agencyApi.getStats(agencyId),
    enabled: !!agencyId
  });

  // Fetch today's orders
  const today = new Date().toISOString().split('T')[0];
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['agencyOrders', agencyId, today],
    queryFn: () => orderApi.getAgencyOrders(agencyId, { date: today }),
    enabled: !!agencyId
  });

  // Fetch pending payments
  const { data: billsData, isLoading: billsLoading } = useQuery({
    queryKey: ['agencyBills', agencyId, 'pending'],
    queryFn: () => billingApi.getAgencyBills(agencyId, { status: 'issued' }),
    enabled: !!agencyId
  });

  const isLoading = statsLoading || ordersLoading || billsLoading;
  const stats = statsData?.data || {};
  const todayOrders = ordersData?.data?.orders || [];
  const pendingBills = billsData?.data?.bills || [];

  if (isLoading) return <PageLoader />;

  const statCards = [
    { 
      title: 'Active Houses', 
      value: stats.activeHouses || 0, 
      icon: Building2, 
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    { 
      title: 'Total Members', 
      value: stats.totalMembers || 0, 
      icon: Users, 
      color: 'text-success-600',
      bgColor: 'bg-success-50'
    },
    { 
      title: "Today's Orders", 
      value: stats.todayOrders || todayOrders.length, 
      icon: ShoppingCart, 
      color: 'text-warning-600',
      bgColor: 'bg-warning-50'
    },
    { 
      title: 'Pending Amount', 
      value: formatCurrency(stats.pendingAmount || 0), 
      icon: IndianRupee, 
      color: 'text-danger-600',
      bgColor: 'bg-danger-50'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">
          Welcome back, {userData?.name?.split(' ')[0]}!
        </h1>
        <p className="text-secondary-600 mt-1">
          Here's what's happening with your agency today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-secondary-500">{stat.title}</p>
                  <p className="text-xl font-bold text-secondary-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today's Orders</CardTitle>
            <Link to={ROUTES.AGENCY_ORDERS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {todayOrders.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No orders for today yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todayOrders.slice(0, 5).map((order) => (
                  <div 
                    key={order.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">{order.houseName}</p>
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

        {/* Pending Bills */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Bills</CardTitle>
            <Link to={ROUTES.AGENCY_BILLS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {pendingBills.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <Receipt className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No pending bills</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingBills.slice(0, 5).map((bill) => (
                  <div 
                    key={bill.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">{bill.houseName}</p>
                      <p className="text-sm text-secondary-500">
                        {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-secondary-900">
                        {formatCurrency(bill.totalAmount - (bill.paidAmount || 0))}
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
            <Link to={ROUTES.AGENCY_MENU}>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Manage Menu
              </Button>
            </Link>
            <Link to={ROUTES.AGENCY_HOUSES}>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="h-4 w-4 mr-2" />
                Add House
              </Button>
            </Link>
            <Link to={ROUTES.AGENCY_ORDERS}>
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Orders
              </Button>
            </Link>
            <Link to={ROUTES.AGENCY_PAYMENTS}>
              <Button variant="outline" className="w-full justify-start">
                <IndianRupee className="h-4 w-4 mr-2" />
                Payments
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
