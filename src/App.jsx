import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingScreen } from './components/ui/Spinner';
import { ProtectedRoute, PublicRoute } from './components/auth/ProtectedRoute';
import { ROUTES, ROLES } from './utils/constants';

// Lazy load pages
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const OrderPage = lazy(() => import('./pages/orders/OrderPage'));
const MyOrdersPage = lazy(() => import('./pages/orders/MyOrdersPage'));
const MyBillsPage = lazy(() => import('./pages/bills/MyBillsPage'));
const ChatPage = lazy(() => import('./pages/chat/ChatPage'));

// Agency pages
const AgencyHousesPage = lazy(() => import('./pages/agency/AgencyHousesPage'));
const AgencyMenuPage = lazy(() => import('./pages/agency/AgencyMenuPage'));
const AgencyOrdersPage = lazy(() => import('./pages/agency/AgencyOrdersPage'));
const AgencyBillsPage = lazy(() => import('./pages/agency/AgencyBillsPage'));
const AgencyPaymentsPage = lazy(() => import('./pages/agency/AgencyPaymentsPage'));
const AgencySettingsPage = lazy(() => import('./pages/agency/AgencySettingsPage'));

// House admin pages
const HouseMembersPage = lazy(() => import('./pages/house/HouseMembersPage'));
const HouseOrdersPage = lazy(() => import('./pages/house/HouseOrdersPage'));
const HouseRequestsPage = lazy(() => import('./pages/house/HouseRequestsPage'));
const HouseBillsPage = lazy(() => import('./pages/house/HouseBillsPage'));

// Profile page
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));

// Admin pages
const AdminAgenciesPage = lazy(() => import('./pages/admin/AdminAgenciesPage'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Public routes */}
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        {/* Protected routes - All authenticated users */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Customer routes */}
        <Route
          path={ROUTES.ORDER}
          element={
            <ProtectedRoute requiredRoles={[ROLES.CUSTOMER, ROLES.HOUSE_ADMIN]}>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.MY_ORDERS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.CUSTOMER, ROLES.HOUSE_ADMIN]}>
              <MyOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.MY_BILLS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.CUSTOMER, ROLES.HOUSE_ADMIN]}>
              <MyBillsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CHAT}
          element={
            <ProtectedRoute requiredRoles={[ROLES.CUSTOMER, ROLES.HOUSE_ADMIN]}>
              <ChatPage />
            </ProtectedRoute>
          }
        />

        {/* Agency routes */}
        <Route
          path={ROUTES.AGENCY_HOUSES}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER, ROLES.AGENCY_HELPER]}>
              <AgencyHousesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AGENCY_MENU}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER, ROLES.AGENCY_HELPER]}>
              <AgencyMenuPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AGENCY_ORDERS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER, ROLES.AGENCY_HELPER]}>
              <AgencyOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AGENCY_BILLS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER]}>
              <AgencyBillsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AGENCY_PAYMENTS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER]}>
              <AgencyPaymentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.AGENCY_SETTINGS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.AGENCY_OWNER]}>
              <AgencySettingsPage />
            </ProtectedRoute>
          }
        />

        {/* House admin routes */}
        <Route
          path={ROUTES.HOUSE_MEMBERS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.HOUSE_ADMIN]}>
              <HouseMembersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.HOUSE_ORDERS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.HOUSE_ADMIN]}>
              <HouseOrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.HOUSE_REQUESTS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.HOUSE_ADMIN]}>
              <HouseRequestsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.HOUSE_BILLS}
          element={
            <ProtectedRoute requiredRoles={[ROLES.HOUSE_ADMIN]}>
              <HouseBillsPage />
            </ProtectedRoute>
          }
        />

        {/* System admin routes */}
        <Route
          path={ROUTES.ADMIN_AGENCIES}
          element={
            <ProtectedRoute requiredRoles={[ROLES.SYSTEM_ADMIN]}>
              <AdminAgenciesPage />
            </ProtectedRoute>
          }
        />

        {/* Redirects */}
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
