import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
  },
});

// Persist the slices that should survive a page refresh (optional feature:
// local storage). Keeping this outside the slices themselves keeps the
// reducers pure and easy to reason about.
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('virestis.cart', JSON.stringify(state.cart.items));
    localStorage.setItem(
      'virestis.favorites',
      JSON.stringify(state.favorites.ids),
    );
    localStorage.setItem('virestis.theme', state.theme.mode);
  } catch {
    /* localStorage might be unavailable (private browsing, etc.) */
  }
});
