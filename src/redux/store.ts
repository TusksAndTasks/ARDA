import { configureStore } from '@reduxjs/toolkit';
import { rolesReducer } from './slices/rolesSlice';
import { resourcesReducer } from './slices/ResourecesSlice';
import { eventsReducer } from './slices/CalendarSlice';
import { popupReducer } from './slices/PopupSlice';

export const store = configureStore({
  reducer: {
    roles: rolesReducer,
    resources: resourcesReducer,
    eventYears: eventsReducer,
    popups: popupReducer,
  },
});

export type GlobalState = ReturnType<typeof store.getState>;
export type GlobalDispatch = typeof store.dispatch;
