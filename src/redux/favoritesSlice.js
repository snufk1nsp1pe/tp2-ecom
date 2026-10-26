import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'virestis.favorites';

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ids: array of favorited product ids
const initialState = {
  ids: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((favId) => favId !== id);
      } else {
        state.ids.push(id);
      }
    },
    clearFavorites: (state) => {
      state.ids = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
