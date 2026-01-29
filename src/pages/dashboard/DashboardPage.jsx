import { useAuth } from '../../contexts/AuthContext';
import { ROLES } from '../../utils/constants';
import { Layout } from '../../components/layout/Layout';

// Import role-specific dashboards
import AgencyDashboard from './dashboards/AgencyDashboard';
import HouseAdminDashboard from './dashboards/HouseAdminDashboard';
import CustomerDashboard from './dashboards/CustomerDashboard';
import SystemAdminDashboard from './dashboards/SystemAdminDashboard';

export default function DashboardPage() {
  const { userData } = useAuth();

  const getDashboard = () => {
    switch (userData?.role) {
      case ROLES.SYSTEM_ADMIN:
        return <SystemAdminDashboard />;
      case ROLES.AGENCY_OWNER:
      case ROLES.AGENCY_HELPER:
        return <AgencyDashboard />;
      case ROLES.HOUSE_ADMIN:
        return <HouseAdminDashboard />;
      case ROLES.CUSTOMER:
        return <CustomerDashboard />;
      default:
        return <CustomerDashboard />;
    }
  };

  return (
    <Layout>
      {getDashboard()}
    </Layout>
  );
}
