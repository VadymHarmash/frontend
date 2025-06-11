import { IExpense } from '../IExpense.ts';

export interface IExpensesSlice {
  expenses: IExpense[];
  isLoading: boolean;
  error: string | null;
  isAuth: boolean;
  userEmail: null | string;
}
