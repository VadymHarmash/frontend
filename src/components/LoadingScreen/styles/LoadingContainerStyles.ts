import { StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: colors.background,
    },
    text: {
      color: colors.textPrimary,
      fontSize: 18,
    },
  });
