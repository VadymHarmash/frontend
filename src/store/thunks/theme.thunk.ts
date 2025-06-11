import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme } from '../../types/enums/Theme.ts';
import { KEYS } from '../../constants/keys.ts';

export const loadTheme = createAsyncThunk(
  'theme/loadTheme',
  async (_, { rejectWithValue }) => {
    try {
      const storedTheme = await AsyncStorage.getItem(KEYS.THEME_STORAGE_KEY);
      if (storedTheme) {
        if (Object.values(Theme).includes(storedTheme as Theme)) {
          return storedTheme as Theme;
        }
      }
      return Theme.Light;
    } catch (error) {
      console.error('Failed to load theme from storage:', error);
      return rejectWithValue('Failed to load theme from storage');
    }
  },
);
