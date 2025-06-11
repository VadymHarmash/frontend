import { createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import { IExpense } from '../../types/IExpense.ts';
import { RootState } from '../index.ts';
import { formatDateToString } from '../../helpers/formatDateToString.ts';

interface FirebaseError {
  code: string;
  message: string;
}

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const userEmail = state.expenses.userEmail;

      if (!userEmail) {
        return rejectWithValue('User email not available.');
      }

      const expensesCollection = await firestore()
        .collection('expenses')
        .where('userEmail', '==', userEmail)
        .orderBy('date', 'desc')
        .get();

      const fetchedExpenses: IExpense[] = expensesCollection.docs.map(doc => {
        const data = doc.data();

        return {
          id: doc.id,
          userEmail: userEmail,
          currency: data.currency,
          title: data.title,
          amount: data.amount,
          category: data.category,
          date: data.date,
        };
      });
      return fetchedExpenses;
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        'message' in error
      ) {
        return rejectWithValue((error as FirebaseError).message);
      }
      return rejectWithValue('Failed to load expenses.');
    }
  },
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (
    expenseData: Omit<IExpense, 'id' | 'date'>,
    { rejectWithValue, getState },
  ) => {
    try {
      const state = getState() as RootState;
      const userEmail = state.expenses.userEmail;

      if (!userEmail) {
        return rejectWithValue('User email not available.');
      }

      const dateString = formatDateToString(new Date());

      const newDocRef = await firestore().collection('expenses').add({
        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        date: dateString,
        userEmail: userEmail,
      });

      const newExpenseWithId: IExpense = {
        ...expenseData,
        id: newDocRef.id,
        date: dateString,
      };
      return newExpenseWithId;
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        'message' in error
      ) {
        return rejectWithValue((error as FirebaseError).message);
      }
      return rejectWithValue('Failed to add expense.');
    }
  },
);

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async (expenseData: IExpense, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const userEmail = state.expenses.userEmail;

      if (!userEmail) {
        return rejectWithValue('User email not available.');
      }

      await firestore().collection('expenses').doc(expenseData.id).update({
        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        date: expenseData.date,
        userEmail: userEmail,
      });
      return expenseData;
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        'message' in error
      ) {
        return rejectWithValue((error as FirebaseError).message);
      }
      return rejectWithValue('Failed to update expense.');
    }
  },
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (expenseId: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const userEmail = state.expenses.userEmail;

      if (!userEmail) {
        return rejectWithValue('User email not available.');
      }

      await firestore().collection('expenses').doc(expenseId).delete();
      return expenseId;
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        'message' in error
      ) {
        return rejectWithValue((error as FirebaseError).message);
      }
      return rejectWithValue('Failed to delete expense.');
    }
  },
);
