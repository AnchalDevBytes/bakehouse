import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  size?: string;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: string;
  shipping: string;
  total: string;
  status: "ordered";
  date: string;
}

interface CartStore {
  items: CartItem[];
  orderHistory: Order[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, size?: string) => void;
  updateQuantity: (id: number, quantity: number, size?: string) => void;
  clearCart: () => void;
  checkout: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orderHistory: [],
      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id && item.size === newItem.size,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id && item.size === newItem.size
                  ? { ...item, quantity: item.quantity + newItem.quantity }
                  : item,
              ),
            };
          }
          return { items: [...state.items, newItem] };
        }),
      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.size === size),
          ),
        })),
      updateQuantity: (id, quantity, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size ? { ...item, quantity } : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
      checkout: () => {
        const { items, orderHistory } = get();
        if (items.length === 0) return;

        const subtotalNum = items.reduce(
          (acc, item) => acc + parseFloat(item.price) * item.quantity,
          0,
        );
        const shippingNum = subtotalNum >= 200 ? 0 : 50;
        const totalNum = subtotalNum + shippingNum;

        const newOrder: Order = {
          id: Math.random().toString(36).substring(2, 11),
          items: [...items],
          subtotal: subtotalNum.toFixed(2),
          shipping: shippingNum.toFixed(2),
          total: totalNum.toFixed(2),
          status: "ordered",
          date: new Date().toISOString(),
        };

        set({
          orderHistory: [newOrder, ...orderHistory],
          items: [],
        });
      },
    }),
    {
      name: "bakehouse-cart",
    },
  ),
);
