import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExpensesSlice } from "../../types/slices/IExpensesSlice.ts";
// import { IExpensesSlice } from "@/interfaces/slice/Expenses.slice.interface";
// import {
//     fetchExpensesByCity,
//     fetchExpensesForecastByCity,
// } from "@/store/thunks/Expenses.thunk";

const initialState: IExpensesSlice = {
  isAuth: false,
};

export const resetExpensesState = createAction("expenses/resetState");

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: builder => {
    builder;
    // .addCase(fetchExpensesByCity.pending, state => {
    //   state.error = "";
    // })
    // .addCase(fetchExpensesByCity.fulfilled, (state, action) => {
    //   state.ExpensesData = action.payload;
    //   state.error = "";
    // })
    // .addCase(fetchExpensesByCity.rejected, (state, action) => {
    //   state.error = action.payload as string;
    // })
    // .addCase(resetExpensesState, state => {
    //   return { ...initialState };
    // })
    // .addCase(fetchExpensesForecastByCity.pending, state => {
    //   state.error = "";
    // })
    // .addCase(fetchExpensesForecastByCity.fulfilled, (state, action) => {
    //   state.forecast = action.payload;
    //   state.error = "";
    // })
    // .addCase(fetchExpensesForecastByCity.rejected, (state, action) => {
    //   state.error = action.payload as string;
    // });
  },
});

export const { setIsAuth } = expensesSlice.actions;
export default expensesSlice.reducer;
