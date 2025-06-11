import { StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    keyboardContainer: {
      width: '100%',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.textPrimary,
      marginBottom: 40,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: 15,
      backgroundColor: colors.surface,
      borderRadius: 10,
      color: colors.textPrimary,
      fontSize: 16,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: colors.primaryLight,
    },
    button: {
      width: '100%',
      padding: 15,
      backgroundColor: colors.primary,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: colors.textAccent,
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonSecondary: {
      width: '100%',
      padding: 15,
      backgroundColor: 'transparent',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.primary,
    },
    buttonSecondaryText: {
      color: colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
