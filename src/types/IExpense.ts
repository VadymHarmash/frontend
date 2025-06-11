// import { Category } from './enums/Category.ts';

export interface IExpense {
  id: string;
  userEmail: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  currency: string;
}
