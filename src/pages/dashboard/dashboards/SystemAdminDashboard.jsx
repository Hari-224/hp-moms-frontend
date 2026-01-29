import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Activity
} from 'lucide-react';
import { adminApi } from '../../../services/api';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { StatusBadge } from '../../../components/ui/Badge';
import { PageLoader } from '../../../components/ui/Spinner';
import Button from '../../../components/ui/Button';
import { formatDate } from '../../../utils/helpers';
import { ROUTES } from '../../../utils/constants';

export default function SystemAdminDashboard() {
  // Fetch system stats
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['adminStats'],
    queryFn: () => adminApi.getStats()
  });

  // Fetch all agencies
  const { data: agenciesData, isLoading: agenciesLoading } = useQuery({
    queryKey: ['adminAgencies'],
    queryFn: () => adminApi.getAgencies({ limit: 10 })
  });

  const isLoading = statsLoading || agenciesLoading;
  const stats = statsData?.data || {};
  const agencies = agenciesData?.data?.agencies || [];

  if (isLoading) return <PageLoader />;

  const statCards = [
    { 
      title: 'Total Agencies', 
      value: stats.totalAgencies || agencies.length, 
      icon: Building2, 
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    { 
      title: 'Total Houses', 
      value: stats.totalHouses || 0, 
      icon: Building2, 
      color: 'text-success-600',
      bgColor: 'bg-success-50'
    },
    { 
      title: 'Total Users', 
      value: stats.totalUsers || 0, 
      icon: Users, 
      color: 'text-warning-600',
      bgColor: 'bg-warning-50'
    },
    { 
      title: 'Active Today', 
      value: stats.activeToday || 0, 
      icon: Activity, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-secondary-900">
          System Admin Dashboard
        </h1>
        <p className="text-secondary-600 mt-1">
          Manage and monitor all agencies in the system
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

      {/* Agencies List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Agencies</CardTitle>
          <Link to={ROUTES.ADMIN_AGENCIES}>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {agencies.length === 0 ? (
            <div className="text-center py-8 text-secondary-500">
              <Building2 className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No agencies registered yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-secondary-500">Agency</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-secondary-500">Owner</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-secondary-500">Houses</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-secondary-500">Created</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-secondary-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {agencies.map((agency) => (
                    <tr key={agency.id} className="border-b border-secondary-100">
                      <td className="py-3 px-4">
                        <p className="font-medium text-secondary-900">{agency.name}</p>
                        <p className="text-sm text-secondary-500">{agency.address}</p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-secondary-900">{agency.ownerName}</p>
                        <p className="text-sm text-secondary-500">{agency.ownerPhone}</p>
                      </td>
                      <td className="py-3 px-4 text-secondary-900">
                        {agency.houseCount || 0}
                      </td>
                      <td className="py-3 px-4 text-secondary-500">
                        {formatDate(agency.createdAt)}
                      </td>
                      <td className="py-3 px-4">
                        <StatusBadge status={agency.status || 'active'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
