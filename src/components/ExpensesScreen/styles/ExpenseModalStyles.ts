import { StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: colors.surface,
      padding: 20,
      borderRadius: 10,
      width: '80%',
      elevation: 5,
      shadowColor: colors.textPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: colors.textPrimary,
    },
    formGroup: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colors.textPrimary,
    },
    input: {
      height: 40,
      borderColor: colors.primaryLight,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      color: colors.textPrimary,
      backgroundColor: colors.background,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      minWidth: 100,
      alignItems: 'center',
    },
    saveButton: {
      backgroundColor: colors.success,
    },
    cancelButton: {
      backgroundColor: colors.error,
    },
    modalButtonText: {
      color: colors.textAccent,
      fontWeight: 'bold',
    },
    currencySelector: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 15,
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: colors.textSecondary,
      borderWidth: 1,
    },
    currencyButton: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    selectedCurrencyButton: {
      backgroundColor: colors.primary,
    },
    currencyButtonText: {
      color: colors.textPrimary,
      fontWeight: 'bold',
    },
    selectedCurrencyButtonText: {
      color: colors.textAccent,
    },
  });
