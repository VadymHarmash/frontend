import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { FC } from 'react';
import { IExpense } from '../../types/IExpense.ts';
import { getThemedStyles } from './styles/ExpenseItemStyles.ts';
import { useAppSelector } from '../../store';
import { getColors } from '../../constants/colors.ts';
import { IThemeColors } from '../../types/IThemeColors.ts';

type ExpenseItemProps = {
  expense: IExpense;
  onEdit: (expense: IExpense) => void;
  onDelete: (id: string) => void;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ expense, onEdit, onDelete }) => {
  const { theme } = useAppSelector(state => state.theme);
  const currentColors: IThemeColors = getColors(theme);
  const styles = getThemedStyles(currentColors);

  return (
    <View style={styles.expenseItem}>
      <View style={styles.expenseDetails}>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseAmount}>
          {expense.currency === 'UAH' ? '₴' : '$'}
          {expense.amount.toFixed(2)}
        </Text>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
        <Text style={styles.expenseDate}>{expense.date}</Text>
      </View>
      <View style={styles.expenseActions}>
        <TouchableOpacity
          onPress={() => onEdit(expense)}
          style={[styles.actionButton, styles.editButton]}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(expense.id)}
          style={[styles.actionButton, styles.deleteButton]}>
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExpenseItem;
