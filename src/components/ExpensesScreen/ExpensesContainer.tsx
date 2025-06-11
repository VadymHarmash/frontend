import { SafeAreaView } from 'react-native';
import ExpensesHeader from './ExpensesHeader.tsx';
import ExpensesList from './ExpensesList.tsx';

const ExpensesContainer = () => {
  return (
    <SafeAreaView>
      <ExpensesHeader />
      <ExpensesList />
    </SafeAreaView>
  );
};

export default ExpensesContainer;
