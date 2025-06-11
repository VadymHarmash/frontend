import { StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    expenseItem: {
      backgroundColor: colors.surface,
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: colors.textPrimary,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    expenseDetails: {
      flex: 1,
    },
    expenseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.textPrimary,
    },
    expenseAmount: {
      fontSize: 16,
      color: colors.primary,
      fontWeight: 'bold',
      marginTop: 5,
    },
    expenseCategory: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 2,
    },
    expenseDate: {
      fontSize: 12,
      color: colors.textSecondary,
      marginTop: 2,
    },
    expenseActions: {
      flexDirection: 'row',
      marginLeft: 10,
    },
    actionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
      marginLeft: 8,
    },
    editButton: {
      backgroundColor: colors.primaryLight,
    },
    deleteButton: {
      backgroundColor: colors.error,
    },
    actionButtonText: {
      color: colors.textAccent,
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
