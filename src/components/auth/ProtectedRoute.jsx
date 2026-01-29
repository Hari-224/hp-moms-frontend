import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingScreen } from '../ui/Spinner';
import { ROUTES, ROLES } from '../../utils/constants';

/**
 * Protected Route - Requires authentication
 */
export function ProtectedRoute({ children, requiredRoles = [] }) {
  const { user, userData, loading, isAuthenticated, isRegistered } = useAuth();
  const location = useLocation();

  // Show loading while checking auth state
  if (loading) {
    return <LoadingScreen message="Loading..." />;
  }

  // Not authenticated - redirect to login
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // Authenticated but not registered - redirect to register
  if (!isRegistered) {
    return <Navigate to={ROUTES.REGISTER} state={{ from: location }} replace />;
  }

  // Check role requirements
  if (requiredRoles.length > 0 && !requiredRoles.includes(userData?.role)) {
    // Redirect to appropriate dashboard based on role
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
}

/**
 * Public Route - Only accessible when NOT authenticated
 */
export function PublicRoute({ children }) {
  const { loading, isAuthenticated, isRegistered } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingScreen message="Loading..." />;
  }

  // If authenticated and registered, redirect to dashboard
  if (isAuthenticated && isRegistered) {
    const from = location.state?.from?.pathname || ROUTES.DASHBOARD;
    return <Navigate to={from} replace />;
  }

  // If authenticated but not registered, allow access to register page
  if (isAuthenticated && !isRegistered && location.pathname !== ROUTES.REGISTER) {
    return <Navigate to={ROUTES.REGISTER} replace />;
  }

  return children;
}

/**
 * Role-based component renderer
 */
export function RoleGuard({ allowedRoles, children, fallback = null }) {
  const { userData } = useAuth();

  if (!userData || !allowedRoles.includes(userData.role)) {
    return fallback;
  }

  return children;
}

export default ProtectedRoute;
