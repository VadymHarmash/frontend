import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { IExpense } from '../../types/IExpense.ts';
import { getThemedStyles } from './styles/ExpenseModalStyles.ts';
import { useAppSelector } from '../../store';
import { formatDateToString } from '../../helpers/formatDateToString.ts';
import { getColors } from '../../constants/colors.ts';
import { IThemeColors } from '../../types/IThemeColors.ts';

interface ExpenseModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (expense: IExpense, isEditing: boolean) => void;
  expenseToEdit?: IExpense | null;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({
  visible,
  onClose,
  onSave,
  expenseToEdit,
}) => {
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [currency, setCurrency] = useState<string>('UAH');
  const { userEmail } = useAppSelector(state => state.user);
  const { theme } = useAppSelector(state => state.theme);
  const currentColors: IThemeColors = getColors(theme);
  const styles = getThemedStyles(currentColors);

  useEffect(() => {
    if (expenseToEdit) {
      setTitle(expenseToEdit.title);
      setAmount(expenseToEdit.amount.toString());
      setCategory(expenseToEdit.category);
      setCurrency(expenseToEdit.currency || 'UAH');
    } else {
      setTitle('');
      setAmount('');
      setCategory('');
      setCurrency('UAH');
    }
  }, [expenseToEdit, visible]);

  const handleSave = () => {
    if (!title || !amount || !category) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newAmount = parseFloat(amount);
    if (isNaN(newAmount) || newAmount <= 0) {
      Alert.alert('Error', 'Amount must be a positive number.');
      return;
    }

    if (userEmail) {
      const expenseData: IExpense = {
        id: expenseToEdit ? expenseToEdit.id : '',
        userEmail,
        title,
        amount: newAmount,
        category: category,
        date: formatDateToString(new Date()),
        currency: currency,
      };

      onSave(expenseData, !!expenseToEdit);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {expenseToEdit ? 'Edit Expense' : 'Add New Expense'}
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor={currentColors.textSecondary}
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Category:</Text>
            <TextInput
              style={styles.input}
              placeholder="Category"
              placeholderTextColor={currentColors.textSecondary}
              value={category}
              onChangeText={setCategory}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Amount:</Text>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor={currentColors.textSecondary}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          <View style={styles.currencySelector}>
            <TouchableOpacity
              style={[
                styles.currencyButton,
                currency === 'UAH' && styles.selectedCurrencyButton,
              ]}
              onPress={() => setCurrency('UAH')}>
              <Text
                style={[
                  styles.currencyButtonText,
                  currency === 'UAH' && styles.selectedCurrencyButtonText,
                ]}>
                UAH
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.currencyButton,
                currency === 'USD' && styles.selectedCurrencyButton,
              ]}
              onPress={() => setCurrency('USD')}>
              <Text
                style={[
                  styles.currencyButtonText,
                  currency === 'USD' && styles.selectedCurrencyButtonText,
                ]}>
                USD
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={handleSave}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ExpenseModal;
