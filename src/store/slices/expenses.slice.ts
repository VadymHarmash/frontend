import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExpensesSlice } from '../../types/slices/IExpensesSlice.ts';
import {
  addExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from '../thunks/expenses.thunk.ts';
import { IExpense } from '../../types/IExpense.ts';

const initialState: IExpensesSlice = {
  expenses: [],
  isLoading: false,
  error: null,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExpenses.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchExpenses.fulfilled,
        (state, action: PayloadAction<IExpense[]>) => {
          state.isLoading = false;
          state.expenses = action.payload;
        },
      )
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(addExpense.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        addExpense.fulfilled,
        (state, action: PayloadAction<IExpense>) => {
          state.isLoading = false;
          state.expenses.unshift(action.payload);
        },
      )
      .addCase(addExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateExpense.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        updateExpense.fulfilled,
        (state, action: PayloadAction<IExpense>) => {
          state.isLoading = false;
          const index = state.expenses.findIndex(
            exp => exp.id === action.payload.id,
          );
          if (index !== -1) {
            state.expenses[index] = action.payload;
          }
        },
      )
      .addCase(updateExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteExpense.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteExpense.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.expenses = state.expenses.filter(
            exp => exp.id !== action.payload,
          );
        },
      )
      .addCase(deleteExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default expensesSlice.reducer;
