import { rolesEnum } from './rolesSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { role: rolesEnum } = {
  role: rolesEnum.NONAUTHORIZED,
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    changeRole: (state, action: PayloadAction<rolesEnum>) => {
      state.role = action.payload;
    },
  },
});

export const rolesReducer = rolesSlice.reducer;
export const { changeRole } = rolesSlice.actions;
