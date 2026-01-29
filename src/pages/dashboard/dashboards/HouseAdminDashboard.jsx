import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShoppingCart, 
  Receipt, 
  CheckSquare,
  MessageSquare,
  ArrowRight,
  IndianRupee,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { houseApi, orderApi, billingApi } from '../../../services/api';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { StatusBadge } from '../../../components/ui/Badge';
import { PageLoader } from '../../../components/ui/Spinner';
import Button from '../../../components/ui/Button';
import { formatCurrency, formatDate } from '../../../utils/helpers';
import { ROUTES } from '../../../utils/constants';

export default function HouseAdminDashboard() {
  const { userData } = useAuth();
  const houseId = userData?.houseId;

  // Fetch house members
  const { data: membersData, isLoading: membersLoading } = useQuery({
    queryKey: ['houseMembers', houseId],
    queryFn: () => houseApi.getMembers(houseId),
    enabled: !!houseId
  });

  // Fetch house orders
  const today = new Date().toISOString().split('T')[0];
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['houseOrders', houseId, today],
    queryFn: () => orderApi.getHouseOrders(houseId, { date: today }),
    enabled: !!houseId
  });

  // Fetch house bills
  const { data: billsData, isLoading: billsLoading } = useQuery({
    queryKey: ['houseBills', houseId],
    queryFn: () => billingApi.getHouseBills(houseId, { limit: 5 }),
    enabled: !!houseId
  });

  const isLoading = membersLoading || ordersLoading || billsLoading;
  const members = membersData?.data?.members || [];
  const orders = ordersData?.data?.orders || [];
  const bills = billsData?.data?.bills || [];

  // Calculate pending bill amount
  const pendingAmount = bills
    .filter(b => b.status === 'issued' || b.status === 'partial')
    .reduce((sum, b) => sum + (b.totalAmount - (b.paidAmount || 0)), 0);

  if (isLoading) return <PageLoader />;

  const statCards = [
    { 
      title: 'Members', 
      value: members.length, 
      icon: Users, 
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    { 
      title: "Today's Orders", 
      value: orders.length, 
      icon: ShoppingCart, 
      color: 'text-success-600',
      bgColor: 'bg-success-50'
    },
    { 
      title: 'Pending Bills', 
      value: bills.filter(b => b.status !== 'paid').length, 
      icon: Receipt, 
      color: 'text-warning-600',
      bgColor: 'bg-warning-50'
    },
    { 
      title: 'Amount Due', 
      value: formatCurrency(pendingAmount), 
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
          House Dashboard
        </h1>
        <p className="text-secondary-600 mt-1">
          Manage your house members and orders
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
        {/* Members */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Members</CardTitle>
            <Link to={ROUTES.HOUSE_MEMBERS}>
              <Button variant="ghost" size="sm">
                Manage
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {members.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No members yet</p>
                <Link to={ROUTES.HOUSE_MEMBERS}>
                  <Button variant="primary" size="sm" className="mt-3">
                    Add Member
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {members.slice(0, 5).map((member) => (
                  <div 
                    key={member.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">{member.name}</p>
                      <p className="text-sm text-secondary-500">{member.phone}</p>
                    </div>
                    <StatusBadge status={member.status || 'active'} />
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
            <Link to={ROUTES.HOUSE_BILLS}>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {bills.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <Receipt className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No bills yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {bills.slice(0, 5).map((bill) => (
                  <div 
                    key={bill.id} 
                    className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-secondary-900">
                        {formatDate(bill.periodStart)} - {formatDate(bill.periodEnd)}
                      </p>
                      <p className="text-sm text-secondary-500">
                        {bill.itemCount || 0} items
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
            <Link to={ROUTES.HOUSE_MEMBERS}>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </Link>
            <Link to={ROUTES.HOUSE_ORDERS}>
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Orders
              </Button>
            </Link>
            <Link to={ROUTES.HOUSE_REQUESTS}>
              <Button variant="outline" className="w-full justify-start">
                <CheckSquare className="h-4 w-4 mr-2" />
                Requests
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
