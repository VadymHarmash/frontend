import { IThemeSlice } from '../../types/slices/IThemeSlice.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types/enums/Theme.ts';

const initialState: IThemeSlice = {
  isLoading: false,
  error: null,
  theme: Theme.Light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
