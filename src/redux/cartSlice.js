import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'virestis.cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// items: [{ productId, quantity }]
const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity = 1 } = action.payload;
      const existing = state.items.find((item) => item.productId === productId);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload,
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.productId === action.payload);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.productId !== action.payload,
        );
      }
    },
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.productId !== productId);
        return;
      }
      const item = state.items.find((i) => i.productId === productId);
      if (item) item.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
