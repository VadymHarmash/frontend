import { Theme } from '../types/enums/Theme.ts';

export const LIGHT_COLORS = {
  primary: '#6200EE',
  primaryLight: '#BB86FC',
  accent: '#03DAC6',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  textAccent: '#FFFFFF',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
};

export const DARK_COLORS = {
  primary: '#BB86FC',
  primaryLight: '#3700B3',
  accent: '#03DAC6',
  background: '#121212',
  surface: '#1E1E1E',
  textPrimary: '#FFFFFF',
  textSecondary: '#BBBBBB',
  textAccent: '#000000',
  success: '#66BB6A',
  warning: '#FFEB3B',
  error: '#EF5350',
};

export const getColors = (theme: Theme) => {
  return theme === Theme.Light ? LIGHT_COLORS : DARK_COLORS;
};
