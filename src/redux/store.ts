import { configureStore } from '@reduxjs/toolkit';
import { rolesReducer } from './slices/rolesSlice';
import { resourcesReducer } from './slices/ResourecesSlice';

export const store = configureStore({
  reducer: {
    roles: rolesReducer,
    resources: resourcesReducer,
  },
});

export type GlobalState = ReturnType<typeof store.getState>;
export type GlobalDispatch = typeof store.dispatch;
