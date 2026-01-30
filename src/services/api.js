import { httpsCallable } from 'firebase/functions';
import { functions } from '../config/firebase';

/**
 * Call a Firebase Cloud Function
 */
async function callFunction(name, data = {}) {
  try {
    const fn = httpsCallable(functions, name);
    const result = await fn(data);
    return { success: true, data: result.data };
  } catch (error) {
    console.error(`Error calling ${name}:`, error);
    return { 
      success: false, 
      error: error.message || 'An error occurred' 
    };
  }
}

// ============ Auth & User Functions ============

export const authApi = {
  registerUser: (data) => callFunction('registerUser', data),
  updateProfile: (data) => callFunction('updateUserProfile', data),
  getProfile: () => callFunction('getUserProfile'),
  updateFCMToken: (token) => callFunction('updateFCMToken', { token }),
  deleteUser: (userId) => callFunction('deleteUser', { userId })
};

// ============ Agency Functions ============

export const agencyApi = {
  create: (data) => callFunction('createAgency', data),
  update: (agencyId, data) => callFunction('updateAgency', { agencyId, ...data }),
  addHelper: (agencyId, data) => callFunction('addAgencyHelper', { agencyId, ...data }),
  removeHelper: (agencyId, helperId) => callFunction('removeAgencyHelper', { agencyId, helperId }),
  getHelpers: (agencyId) => callFunction('getAgencyHelpers', { agencyId }),
  list: () => callFunction('listAgencies'),
  getStats: (agencyId) => callFunction('getAgencyStats', { agencyId })
};

// ============ House Functions ============

export const houseApi = {
  create: (data) => callFunction('createHouse', data),
  list: (agencyId) => callFunction('getAgencyHouses', { agencyId }),
  update: (houseId, data) => callFunction('updateHouse', { houseId, ...data }),
  addMember: (houseId, data) => callFunction('addHouseMember', { houseId, ...data }),
  removeMember: (houseId, userId) => callFunction('removeHouseMember', { houseId, userId }),
  changeAdmin: (houseId, newAdminId) => callFunction('changeHouseAdmin', { houseId, newAdminId }),
  delete: (houseId) => callFunction('deleteHouse', { houseId }),
  getMembers: (houseId) => callFunction('getHouseMembers', { houseId }),
  getMyHouses: () => callFunction('getMyHouses')
};

// ============ Menu Functions ============

export const menuApi = {
  createItem: (agencyId, data) => callFunction('createMenuItem', { agencyId, ...data }),
  updateItem: (itemId, data) => callFunction('updateMenuItem', { itemId, ...data }),
  deleteItem: (itemId) => callFunction('deleteMenuItem', { itemId }),
  getItems: (agencyId) => callFunction('getMenuItems', { agencyId }),
  
  // Daily menu
  publishDailyMenu: (data) => callFunction('publishDailyMenu', data),
  getDailyMenu: (agencyId, date) => callFunction('getDailyMenu', { agencyId, date }),
  lockMenu: (agencyId, date, mealType) => callFunction('lockMenu', { agencyId, date, mealType }),
  unlockMenu: (agencyId, date, mealType) => callFunction('unlockMenu', { agencyId, date, mealType }),
  
  // Cutoff settings
  updateCutoff: (agencyId, mealType, cutoffTime) => 
    callFunction('updateCutoffTime', { agencyId, mealType, cutoffTime })
};

// ============ Order Functions ============

export const orderApi = {
  place: (data) => callFunction('placeOrder', data),
  update: (orderId, data) => callFunction('updateOrder', { orderId, ...data }),
  cancel: (orderId, reason) => callFunction('cancelOrder', { orderId, reason }),
  updateStatus: (orderId, status) => callFunction('updateOrderStatus', { orderId, status }),
  
  // Manual consumption
  createManualRequest: (data) => callFunction('createManualConsumptionRequest', data),
  approveManualRequest: (requestId, data) => callFunction('approveManualRequest', { requestId, ...data }),
  rejectManualRequest: (requestId, reason) => callFunction('rejectManualRequest', { requestId, reason }),
  
  // Aggregation
  getAggregated: (agencyId, date, mealType) => 
    callFunction('getAggregatedOrders', { agencyId, date, mealType }),
  
  // Queries
  getMyOrders: (filters) => callFunction('getMyOrders', filters),
  getHouseOrders: (houseId, filters) => callFunction('getHouseOrders', { houseId, ...filters }),
  getAgencyOrders: (agencyId, filters) => callFunction('getAgencyOrders', { agencyId, ...filters })
};

// ============ Billing Functions ============

export const billingApi = {
  generate: (data) => callFunction('generateBill', data),
  getBill: (billId) => callFunction('getBill', { billId }),
  getHouseBills: (houseId, filters) => callFunction('getHouseBills', { houseId, ...filters }),
  getAgencyBills: (agencyId, filters) => callFunction('getAgencyBills', { agencyId, ...filters }),
  getMyBills: (filters) => callFunction('getMyBills', filters)
};

// ============ Payment Functions ============

export const paymentApi = {
  record: (data) => callFunction('recordPayment', data),
  confirm: (paymentId) => callFunction('confirmPayment', { paymentId }),
  reject: (paymentId, reason) => callFunction('rejectPayment', { paymentId, reason }),
  getPayments: (billId) => callFunction('getPayments', { billId }),
  getAgencyPayments: (agencyId, filters) => callFunction('getAgencyPayments', { agencyId, ...filters })
};

// ============ Notification Functions ============

export const notificationApi = {
  getAll: (filters) => callFunction('getNotifications', filters),
  markRead: (notificationId) => callFunction('markNotificationRead', { notificationId }),
  markAllRead: () => callFunction('markAllNotificationsRead'),
  updateSettings: (settings) => callFunction('updateNotificationSettings', settings)
};

// ============ Chat Functions ============

export const chatApi = {
  sendMessage: (houseId, data) => callFunction('sendChatMessage', { houseId, ...data }),
  getMessages: (houseId, cursor) => callFunction('getChatMessages', { houseId, cursor }),
  shareOrder: (houseId, orderId) => callFunction('shareOrderInChat', { houseId, orderId }),
  shareBill: (houseId, billId) => callFunction('shareBillInChat', { houseId, billId })
};

// ============ System Admin Functions ============

export const adminApi = {
  getAllAgencies: (filters) => callFunction('adminGetAgencies', filters),
  getAgencies: (filters) => callFunction('adminGetAgencies', filters),
  createAgency: (data) => callFunction('adminCreateAgency', data),
  updateAgency: (agencyId, data) => callFunction('adminUpdateAgency', { agencyId, ...data }),
  updateAgencyStatus: (agencyId, status) => callFunction('adminUpdateAgencyStatus', { agencyId, status }),
  deleteAgency: (agencyId) => callFunction('adminDeleteAgency', { agencyId }),
  approveAgency: (agencyId) => callFunction('adminApproveAgency', { agencyId }),
  suspendAgency: (agencyId, reason) => callFunction('adminSuspendAgency', { agencyId, reason }),
  getStats: () => callFunction('adminGetStats')
};

export default {
  auth: authApi,
  agency: agencyApi,
  house: houseApi,
  menu: menuApi,
  order: orderApi,
  billing: billingApi,
  payment: paymentApi,
  notification: notificationApi,
  chat: chatApi,
  admin: adminApi
};
