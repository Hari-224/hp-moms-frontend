import { cn } from '../../utils/helpers';

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className
}) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center py-12 px-6 text-center',
      className
    )}>
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-secondary-400" />
        </div>
      )}
      {title && (
        <h3 className="text-lg font-medium text-secondary-900 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-secondary-500 max-w-sm mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}

export default EmptyState;
