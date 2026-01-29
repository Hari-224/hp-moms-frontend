import { cn } from '../../utils/helpers';

const badgeVariants = {
  primary: 'bg-primary-100 text-primary-800',
  secondary: 'bg-secondary-100 text-secondary-800',
  success: 'bg-success-100 text-success-800',
  warning: 'bg-warning-100 text-warning-800',
  danger: 'bg-danger-100 text-danger-800',
  info: 'bg-blue-100 text-blue-800'
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm'
};

export function Badge({ 
  className, 
  variant = 'secondary', 
  size = 'md',
  dot = false,
  children, 
  ...props 
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full mr-1.5',
          variant === 'success' && 'bg-success-500',
          variant === 'warning' && 'bg-warning-500',
          variant === 'danger' && 'bg-danger-500',
          variant === 'primary' && 'bg-primary-500',
          variant === 'secondary' && 'bg-secondary-500',
          variant === 'info' && 'bg-blue-500'
        )} />
      )}
      {children}
    </span>
  );
}

// Status badge helper
export function StatusBadge({ status, className }) {
  const statusConfig = {
    // Order status
    placed: { label: 'Placed', variant: 'primary' },
    confirmed: { label: 'Confirmed', variant: 'success' },
    preparing: { label: 'Preparing', variant: 'warning' },
    ready: { label: 'Ready', variant: 'success' },
    delivered: { label: 'Delivered', variant: 'secondary' },
    cancelled: { label: 'Cancelled', variant: 'danger' },
    
    // Request status
    pending: { label: 'Pending', variant: 'warning' },
    approved: { label: 'Approved', variant: 'success' },
    rejected: { label: 'Rejected', variant: 'danger' },
    
    // Bill status
    draft: { label: 'Draft', variant: 'secondary' },
    issued: { label: 'Issued', variant: 'primary' },
    partial: { label: 'Partial', variant: 'warning' },
    paid: { label: 'Paid', variant: 'success' },
    overdue: { label: 'Overdue', variant: 'danger' },
    
    // User status
    active: { label: 'Active', variant: 'success' },
    suspended: { label: 'Suspended', variant: 'danger' }
    // Note: 'confirmed' already defined under order status (used for both orders and payments)
  };

  const config = statusConfig[status] || { label: status, variant: 'secondary' };

  return (
    <Badge variant={config.variant} dot className={className}>
      {config.label}
    </Badge>
  );
}

export default Badge;
