import { StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 50,
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.textPrimary,
    },
    logoutButton: {
      backgroundColor: colors.error,
      padding: 10,
      borderRadius: 5,
    },
    logoutButtonText: {
      color: colors.textAccent,
      fontWeight: 'bold',
    },
  });
