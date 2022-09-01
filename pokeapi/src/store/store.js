import { configureStore } from '@reduxjs/toolkit';
import { pokeSlice } from './slices/pokeSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokeSlice.reducer,
    namePoke: pokeSlice.reducer,
    sprites: pokeSlice.reducer,
    abilities: pokeSlice.reducer,
    id: pokeSlice.reducer,
  },
});
