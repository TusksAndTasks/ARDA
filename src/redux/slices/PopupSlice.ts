import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum popupIds {
  AUTH = 'AUTH',
  PASSWORD = 'PASSWORD',
  WEBINARSJOIN = 'WEBINARSJOIN',
  STANDARDSJOIN = 'STANDARDSJOIN',
  JOINFORM = 'JOINFORM',
  PROFILEFORM = 'PROFILEFORM',
  PASSWORDFORM = 'PASSWORDFORM',
  NONE = 'NONE',
}

const initialState: { popupId: popupIds } = {
  popupId: popupIds.NONE,
};

const popupSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    changePopup: (state, action: PayloadAction<popupIds>) => {
      state.popupId = action.payload;
    },
  },
});

export const popupReducer = popupSlice.reducer;
export const { changePopup } = popupSlice.actions;
