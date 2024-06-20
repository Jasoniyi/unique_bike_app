import create from "zustand";
import { ProductShape } from "../data/data";

// Define the interface of the cart state
type State = {
  cart: ProductShape[];
  totalItems: number;
  totalPrice: number;
};

// Define the interface of the actions that can be performed in the cart
type Actions = {
  addToCart: (product: ProductShape) => void;
  removeFromCart: (product: ProductShape) => void;
};

// Create the store with Zustard, combining the status interface and actions
export const useCartStore = create<State & Actions>((set, get) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: (product: ProductShape) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    // if the item already exists in the cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: ProductShape) => {
    const cart = get().cart.filter((item) => item.id !== product.id);
    set((state) => ({
      cart,
      totalItems: state.totalItems - (product.quantity || 1),
      totalPrice: state.totalPrice - product.price * (product.quantity || 1),
    }));
  },
}));
