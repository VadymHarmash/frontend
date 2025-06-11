import { Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { IExpense } from '../../types/IExpense.ts';
import { styles } from './styles/ExpenseItemStyles.ts';

type ExpenseItemProps = {
  expense: IExpense;
  onEdit: (expense: IExpense) => void;
  onDelete: (id: string) => void;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ expense, onEdit, onDelete }) => {
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
