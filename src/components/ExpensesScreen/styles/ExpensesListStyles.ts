import { Dimensions, StyleSheet } from 'react-native';
import { IThemeColors } from '../../../types/IThemeColors.ts';

const buttonWidth = Dimensions.get('window').width - 20;

export const getThemedStyles = (colors: IThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listContent: {
      padding: 10,
      paddingBottom: 75,
    },
    addButton: {
      backgroundColor: colors.primary,
      width: buttonWidth,
      borderRadius: 12,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.textPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    addButtonText: {
      color: colors.textAccent,
      fontSize: 16,
      lineHeight: 30,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    emptyListText: {
      fontSize: 18,
      color: colors.textSecondary,
      textAlign: 'center',
    },
  });
