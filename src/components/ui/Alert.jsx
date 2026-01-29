import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '../../utils/helpers';

const alertVariants = {
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-500',
    title: 'text-blue-800',
    description: 'text-blue-700'
  },
  success: {
    container: 'bg-success-50 border-success-200',
    icon: 'text-success-500',
    title: 'text-success-800',
    description: 'text-success-700'
  },
  warning: {
    container: 'bg-warning-50 border-warning-200',
    icon: 'text-warning-500',
    title: 'text-warning-800',
    description: 'text-warning-700'
  },
  danger: {
    container: 'bg-danger-50 border-danger-200',
    icon: 'text-danger-500',
    title: 'text-danger-800',
    description: 'text-danger-700'
  }
};

const alertIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle
};

export function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  className
}) {
  const styles = alertVariants[variant];
  const Icon = alertIcons[variant];

  return (
    <div
      className={cn(
        'flex p-4 rounded-lg border',
        styles.container,
        className
      )}
      role="alert"
    >
      <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', styles.icon)} />
      <div className="ml-3 flex-1">
        {title && (
          <h3 className={cn('text-sm font-medium', styles.title)}>
            {title}
          </h3>
        )}
        {children && (
          <div className={cn('text-sm', styles.description, title && 'mt-1')}>
            {children}
          </div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={cn('ml-auto flex-shrink-0', styles.icon, 'hover:opacity-70')}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default Alert;
