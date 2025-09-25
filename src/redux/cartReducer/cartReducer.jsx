import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // cart items array

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItem: (state, action) => {
      return action.payload; // replace cart with payload
    },
    addCartItem: (state, action) => {
      state.push(action.payload); // add new item
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload.id;
      return state.filter((item) => item.id !== itemId);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      return state.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      return state
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity <= 0
    },
    clearCart: () => {
      return [];
    },
  },
});

// Export actions
export const {
  getCartItem,
  addCartItem,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Selector
export const cartSelector = (state) => state.cart;

// Export reducer
export const cartReducer = cartSlice.reducer;
