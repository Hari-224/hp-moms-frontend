import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * App Store - Global application state
 */
export const useAppStore = create(
  persist(
    (set, get) => ({
      // Sidebar state
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Theme
      theme: 'light',
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.classList.toggle('dark', theme === 'dark');
      },

      // Selected agency (for multi-agency users)
      selectedAgencyId: null,
      setSelectedAgencyId: (id) => set({ selectedAgencyId: id }),

      // Selected house (for customers in multiple houses)
      selectedHouseId: null,
      setSelectedHouseId: (id) => set({ selectedHouseId: id }),

      // Active date for orders/menu
      activeDate: new Date().toISOString().split('T')[0],
      setActiveDate: (date) => set({ activeDate: date }),

      // Notifications
      unreadCount: 0,
      setUnreadCount: (count) => set({ unreadCount: count }),

      // Online status
      isOnline: navigator.onLine,
      setIsOnline: (online) => set({ isOnline: online })
    }),
    {
      name: 'moms-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
        selectedAgencyId: state.selectedAgencyId,
        selectedHouseId: state.selectedHouseId
      })
    }
  )
);

/**
 * Order Cart Store
 */
export const useCartStore = create((set, get) => ({
  items: [],
  mealType: null,

  // Add item to cart
  addItem: (item) => {
    const { items } = get();
    const existingIndex = items.findIndex(i => i.menuItemId === item.menuItemId);
    
    if (existingIndex >= 0) {
      // Update quantity
      const newItems = [...items];
      newItems[existingIndex].quantity += item.quantity;
      set({ items: newItems });
    } else {
      set({ items: [...items, item] });
    }
  },

  // Update item quantity
  updateQuantity: (menuItemId, quantity) => {
    const { items } = get();
    if (quantity <= 0) {
      set({ items: items.filter(i => i.menuItemId !== menuItemId) });
    } else {
      set({
        items: items.map(i => 
          i.menuItemId === menuItemId ? { ...i, quantity } : i
        )
      });
    }
  },

  // Remove item
  removeItem: (menuItemId) => {
    set({ items: get().items.filter(i => i.menuItemId !== menuItemId) });
  },

  // Set meal type
  setMealType: (type) => set({ mealType: type }),

  // Clear cart
  clearCart: () => set({ items: [], mealType: null }),

  // Get total
  getTotal: () => {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // Get item count
  getItemCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  }
}));

/**
 * Offline Queue Store
 */
export const useOfflineStore = create(
  persist(
    (set, get) => ({
      queue: [],

      // Add action to queue
      addToQueue: (action) => {
        set({ queue: [...get().queue, { ...action, id: Date.now(), timestamp: new Date().toISOString() }] });
      },

      // Remove action from queue
      removeFromQueue: (id) => {
        set({ queue: get().queue.filter(a => a.id !== id) });
      },

      // Clear queue
      clearQueue: () => set({ queue: [] }),

      // Get queue length
      getQueueLength: () => get().queue.length
    }),
    {
      name: 'moms-offline-queue',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
