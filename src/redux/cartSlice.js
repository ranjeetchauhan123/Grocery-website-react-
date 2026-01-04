import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (i) => i.id === action.payload.id
      );

      if (existingItem) { existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
