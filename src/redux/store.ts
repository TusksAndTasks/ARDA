import { configureStore } from '@reduxjs/toolkit';
import { rolesReducer } from './slices/rolesSlice';

export const store = configureStore({
  reducer: {
    roles: rolesReducer,
  },
});

export type GlobalState = ReturnType<typeof store.getState>;
export type GlobalDispatch = typeof store.dispatch;
