import { IThemeSlice } from '../../types/slices/IThemeSlice.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types/enums/Theme.ts';
import { loadTheme } from '../thunks/theme.thunk.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEYS } from '../../constants/keys.ts';

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
      AsyncStorage.setItem(KEYS.THEME_STORAGE_KEY, action.payload).catch(e =>
        console.error('Failed to save theme to storage:', e),
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadTheme.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadTheme.fulfilled, (state, action: PayloadAction<Theme>) => {
        state.isLoading = false;
        state.theme = action.payload;
      })
      .addCase(loadTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.theme = Theme.Light;
      });
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
