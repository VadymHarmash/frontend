import { combineReducers, configureStore } from '@reduxjs/toolkit';
import expensesReducer from './slices/expenses.slice.ts';
import userReducer from './slices/user.slice.ts';
import themeReducer from './slices/theme.slice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  user: userReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
