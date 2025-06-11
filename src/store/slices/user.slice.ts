import { IUserSlice } from '../../types/slices/IUserSlice.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserSlice = {
  isLoading: false,
  error: null,
  isAuth: false,
  userEmail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
});

export const { setIsAuth, setUserEmail } = userSlice.actions;
export default userSlice.reducer;
