// Role constants
export const ROLES = {
  SYSTEM_ADMIN: 'system_admin',
  AGENCY_OWNER: 'agency_owner',
  AGENCY_HELPER: 'agency_helper',
  HOUSE_ADMIN: 'house_admin',
  CUSTOMER: 'customer'
};

// Order status
export const ORDER_STATUS = {
  PLACED: 'placed',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  READY: 'ready',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

// Order types
export const ORDER_TYPE = {
  NORMAL: 'normal',
  MANUAL_APPROVED: 'manual_approved'
};

// Meal types
export const MEAL_TYPES = {
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  DINNER: 'dinner',
  SNACKS: 'snacks'
};

export const MEAL_TYPE_LABELS = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snacks: 'Snacks'
};

// Menu status
export const MENU_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  LOCKED: 'locked'
};

// Bill status
export const BILL_STATUS = {
  DRAFT: 'draft',
  ISSUED: 'issued',
  PARTIAL: 'partial',
  PAID: 'paid',
  OVERDUE: 'overdue'
};

// Payment status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  REJECTED: 'rejected'
};

// Payment methods
export const PAYMENT_METHODS = {
  CASH: 'cash',
  UPI: 'upi',
  BANK_TRANSFER: 'bank_transfer',
  OTHER: 'other'
};

export const PAYMENT_METHOD_LABELS = {
  cash: 'Cash',
  upi: 'UPI',
  bank_transfer: 'Bank Transfer',
  other: 'Other'
};

// User status
export const USER_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  SUSPENDED: 'suspended'
};

// Manual request status
export const MANUAL_REQUEST_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected'
};

// Role labels for display
export const ROLE_LABELS = {
  system_admin: 'System Admin',
  agency_owner: 'Agency Owner',
  agency_helper: 'Agency Helper',
  house_admin: 'House Admin',
  customer: 'Customer'
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  
  // Agency routes
  AGENCY_DASHBOARD: '/agency',
  AGENCY_HOUSES: '/agency/houses',
  AGENCY_MENU: '/agency/menu',
  AGENCY_ORDERS: '/agency/orders',
  AGENCY_BILLS: '/agency/bills',
  AGENCY_PAYMENTS: '/agency/payments',
  AGENCY_SETTINGS: '/agency/settings',
  
  // House admin routes
  HOUSE_DASHBOARD: '/house',
  HOUSE_MEMBERS: '/house/members',
  HOUSE_ORDERS: '/house/orders',
  HOUSE_BILLS: '/house/bills',
  HOUSE_REQUESTS: '/house/requests',
  
  // Customer routes
  ORDER: '/order',
  MY_ORDERS: '/my-orders',
  MY_BILLS: '/my-bills',
  CHAT: '/chat',
  PROFILE: '/profile',
  
  // System admin routes
  ADMIN: '/admin',
  ADMIN_AGENCIES: '/admin/agencies'
};

// Status colors
export const STATUS_COLORS = {
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
