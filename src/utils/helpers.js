import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';

/**
 * Merge Tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency (Indian Rupee)
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date, formatStr = 'dd MMM yyyy') {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date.toDate ? date.toDate() : date;
  return format(d, formatStr);
}

/**
 * Format time
 */
export function formatTime(date, formatStr = 'hh:mm a') {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date.toDate ? date.toDate() : date;
  return format(d, formatStr);
}

/**
 * Format date time
 */
export function formatDateTime(date) {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date.toDate ? date.toDate() : date;
  return format(d, 'dd MMM yyyy, hh:mm a');
}

/**
 * Format relative time
 */
export function formatRelativeTime(date) {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date.toDate ? date.toDate() : date;
  return formatDistanceToNow(d, { addSuffix: true });
}

/**
 * Format chat time
 */
export function formatChatTime(date) {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date.toDate ? date.toDate() : date;
  
  if (isToday(d)) {
    return format(d, 'hh:mm a');
  }
  if (isYesterday(d)) {
    return 'Yesterday ' + format(d, 'hh:mm a');
  }
  return format(d, 'dd MMM, hh:mm a');
}

/**
 * Format phone number
 */
export function formatPhone(phone) {
  if (!phone) return '';
  // Remove +91 prefix for display
  const cleaned = phone.replace(/^\+91/, '');
  // Format as XXX XXX XXXX
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Normalize phone number
 */
export function normalizePhone(phone) {
  let normalized = phone.replace(/[\s-]/g, '');
  if (!normalized.startsWith('+')) {
    normalized = '+91' + normalized;
  }
  return normalized;
}

/**
 * Validate phone number
 */
export function isValidPhone(phone) {
  const phoneRegex = /^\+?[1-9]\d{9,14}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

/**
 * Get initials from name
 */
export function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Truncate text
 */
export function truncate(text, maxLength = 50) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Calculate total from items
 */
export function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.quantity * (item.priceAtOrder || item.price || 0));
  }, 0);
}

/**
 * Group array by key
 */
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const keyValue = typeof key === 'function' ? key(item) : item[key];
    (result[keyValue] = result[keyValue] || []).push(item);
    return result;
  }, {});
}

/**
 * Generate unique ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if user has role
 */
export function hasRole(user, roles) {
  if (!user || !user.role) return false;
  if (typeof roles === 'string') {
    return user.role === roles;
  }
  return roles.includes(user.role);
}

/**
 * Get status badge class
 */
export function getStatusBadgeClass(status) {
  const statusMap = {
    placed: 'badge-primary',
    confirmed: 'badge-success',
    preparing: 'badge-warning',
    ready: 'badge-success',
    delivered: 'badge-secondary',
    cancelled: 'badge-danger',
    pending: 'badge-warning',
    approved: 'badge-success',
    rejected: 'badge-danger',
    draft: 'badge-secondary',
    issued: 'badge-primary',
    partial: 'badge-warning',
    paid: 'badge-success',
    overdue: 'badge-danger',
    active: 'badge-success',
    suspended: 'badge-danger'
  };
  return statusMap[status] || 'badge-secondary';
}
