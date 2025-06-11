import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { IExpense } from '../../types/IExpense.ts';
import { getThemedStyles } from './styles/ExpensesListStyles.ts';
import ExpenseItem from './ExpenseItem.tsx';
import ExpenseModal from './ExpenseModal.tsx';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import {
  addExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from '../../store/thunks/expenses.thunk.ts';
import { getColors } from '../../constants/colors.ts';
import { IThemeColors } from '../../types/IThemeColors.ts';

const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const { expenses, isLoading, error } = useAppSelector(
    (state: RootState) => state.expenses,
  );
  const { theme } = useAppSelector(state => state.theme);
  const currentColors: IThemeColors = getColors(theme);
  const styles = getThemedStyles(currentColors);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentExpense, setCurrentExpense] = useState<IExpense | null>(null);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  const openModal = (expense?: IExpense) => {
    setCurrentExpense(expense || null);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentExpense(null);
  };

  const handleSaveExpense = (expenseData: IExpense, isEditing: boolean) => {
    if (isEditing) {
      dispatch(updateExpense(expenseData));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, date, ...dataToSave } = expenseData;
      dispatch(addExpense(dataToSave));
    }
    closeModal();
  };

  const handleDeleteExpense = (id: string) => {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch(deleteExpense(id));
          },
          style: 'destructive',
        },
      ],
    );
  };

  const renderExpenseItem = ({ item }: { item: IExpense }) => (
    <ExpenseItem
      expense={item}
      onEdit={openModal}
      onDelete={handleDeleteExpense}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => openModal()}>
        <Text style={styles.addButtonText}>Add expense</Text>
      </TouchableOpacity>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={currentColors.primary} />
          <Text style={{ color: currentColors.textPrimary }}>
            Loading expenses...
          </Text>
        </View>
      )}

      {!isLoading && expenses.length === 0 && (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>
            No expenses yet. Add the first one!
          </Text>
        </View>
      )}

      {!isLoading && expenses.length > 0 && (
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}

      <ExpenseModal
        visible={modalVisible}
        onClose={closeModal}
        onSave={handleSaveExpense}
        expenseToEdit={currentExpense}
      />
    </SafeAreaView>
  );
};

export default ExpensesList;
