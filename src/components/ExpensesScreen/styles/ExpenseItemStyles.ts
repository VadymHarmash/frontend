import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors.ts';

const buttonWidth = Dimensions.get('window').width - 20;

export const styles = StyleSheet.create({
  expenseItem: {
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
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
    color: COLORS.textPrimary,
  },
  expenseAmount: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 5,
  },
  expenseCategory: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  expenseDate: {
    fontSize: 12,
    color: COLORS.textSecondary,
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
    backgroundColor: COLORS.primaryLight,
  },
  deleteButton: {
    backgroundColor: COLORS.error,
  },
  actionButtonText: {
    color: COLORS.textAccent,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
