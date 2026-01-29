import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Menu,
  X,
  ChefHat,
  Building2,
  Users,
  ShoppingCart,
  Receipt,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  User,
  LayoutDashboard,
  FileText,
  CheckSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useAppStore } from '../../store';
import { cn } from '../../utils/helpers';
import { ROLES, ROUTES } from '../../utils/constants';
import { Avatar } from '../ui/Avatar';
import Button from '../ui/Button';

// Navigation items by role
const getNavItems = (role) => {
  const common = [
    { icon: Home, label: 'Dashboard', path: ROUTES.DASHBOARD }
  ];

  const roleNav = {
    [ROLES.SYSTEM_ADMIN]: [
      { icon: Building2, label: 'Agencies', path: ROUTES.ADMIN_AGENCIES },
      { icon: Settings, label: 'Settings', path: '/admin/settings' }
    ],
    [ROLES.AGENCY_OWNER]: [
      { icon: Building2, label: 'Houses', path: ROUTES.AGENCY_HOUSES },
      { icon: ChefHat, label: 'Menu', path: ROUTES.AGENCY_MENU },
      { icon: ShoppingCart, label: 'Orders', path: ROUTES.AGENCY_ORDERS },
      { icon: Receipt, label: 'Bills', path: ROUTES.AGENCY_BILLS },
      { icon: CreditCard, label: 'Payments', path: ROUTES.AGENCY_PAYMENTS },
      { icon: Settings, label: 'Settings', path: ROUTES.AGENCY_SETTINGS }
    ],
    [ROLES.AGENCY_HELPER]: [
      { icon: Building2, label: 'Houses', path: ROUTES.AGENCY_HOUSES },
      { icon: ChefHat, label: 'Menu', path: ROUTES.AGENCY_MENU },
      { icon: ShoppingCart, label: 'Orders', path: ROUTES.AGENCY_ORDERS }
    ],
    [ROLES.HOUSE_ADMIN]: [
      { icon: Users, label: 'Members', path: ROUTES.HOUSE_MEMBERS },
      { icon: ShoppingCart, label: 'Orders', path: ROUTES.HOUSE_ORDERS },
      { icon: CheckSquare, label: 'Requests', path: ROUTES.HOUSE_REQUESTS },
      { icon: Receipt, label: 'Bills', path: ROUTES.HOUSE_BILLS },
      { icon: MessageSquare, label: 'Chat', path: ROUTES.CHAT }
    ],
    [ROLES.CUSTOMER]: [
      { icon: ChefHat, label: 'Order Food', path: ROUTES.ORDER },
      { icon: FileText, label: 'My Orders', path: ROUTES.MY_ORDERS },
      { icon: Receipt, label: 'My Bills', path: ROUTES.MY_BILLS },
      { icon: MessageSquare, label: 'Chat', path: ROUTES.CHAT }
    ]
  };

  return [...common, ...(roleNav[role] || [])];
};

export function Sidebar() {
  const { userData, signOut } = useAuth();
  const { sidebarOpen, setSidebarOpen, unreadCount } = useAppStore();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = getNavItems(userData?.role);

  const handleSignOut = async () => {
    await signOut();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-secondary-200 transform transition-transform duration-300 lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-secondary-200">
            <Link to={ROUTES.DASHBOARD} className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-secondary-900">MOMS</span>
            </Link>
            <button 
              className="lg:hidden text-secondary-400 hover:text-secondary-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path !== ROUTES.DASHBOARD && location.pathname.startsWith(item.path));
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        isActive 
                          ? 'bg-primary-50 text-primary-700' 
                          : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-secondary-200">
            <div className="flex items-center gap-3 mb-3">
              <Avatar name={userData?.name} size="md" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-secondary-900 truncate">
                  {userData?.name}
                </p>
                <p className="text-xs text-secondary-500 capitalize">
                  {userData?.role?.replace('_', ' ')}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1"
                onClick={() => navigate(ROUTES.PROFILE)}
              >
                <User className="h-4 w-4 mr-1" />
                Profile
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-danger-600 hover:bg-danger-50"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export function Header() {
  const { userData } = useAuth();
  const { setSidebarOpen, unreadCount } = useAppStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-secondary-200 lg:ml-64">
      <div className="flex items-center justify-between h-full px-4">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-secondary-600 hover:text-secondary-900"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Right section */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Notifications */}
          <button 
            className="relative p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg"
            onClick={() => navigate('/notifications')}
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center h-5 w-5 text-xs font-medium text-white bg-danger-500 rounded-full">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {/* User avatar (mobile) */}
          <button 
            className="lg:hidden"
            onClick={() => navigate(ROUTES.PROFILE)}
          >
            <Avatar name={userData?.name} size="sm" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
