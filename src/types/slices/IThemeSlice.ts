import { Theme } from '../enums/Theme.ts';

export interface IThemeSlice {
  isLoading: boolean;
  error: null | string;
  theme: Theme;
}
