import { cn } from '../../utils/helpers';
import { getInitials } from '../../utils/helpers';

const avatarSizes = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
  '2xl': 'h-20 w-20 text-xl'
};

const avatarColors = [
  'bg-primary-500',
  'bg-success-500',
  'bg-warning-500',
  'bg-danger-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500'
];

function getColorFromName(name) {
  if (!name) return avatarColors[0];
  const charCode = name.charCodeAt(0) + (name.charCodeAt(1) || 0);
  return avatarColors[charCode % avatarColors.length];
}

export function Avatar({
  src,
  name,
  size = 'md',
  className,
  ...props
}) {
  const initials = getInitials(name);
  const bgColor = getColorFromName(name);

  if (src) {
    return (
      <img
        src={src}
        alt={name || 'Avatar'}
        className={cn(
          'rounded-full object-cover',
          avatarSizes[size],
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-medium text-white',
        avatarSizes[size],
        bgColor,
        className
      )}
      {...props}
    >
      {initials}
    </div>
  );
}

export function AvatarGroup({ 
  users = [], 
  max = 4, 
  size = 'md',
  className 
}) {
  const displayUsers = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className={cn('flex -space-x-2', className)}>
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.id || index}
          src={user.photoURL}
          name={user.name || user.displayName}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            'rounded-full flex items-center justify-center font-medium bg-secondary-200 text-secondary-700 ring-2 ring-white',
            avatarSizes[size]
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}

export default Avatar;
