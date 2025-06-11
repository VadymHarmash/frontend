import { SafeAreaView } from 'react-native';
import ExpensesHeader from './ExpensesHeader.tsx';
import ExpensesList from './ExpensesList.tsx';
import ThemeController from '../UI/ThemeController.tsx';
import { styles } from './styles/ExpensesContainerStyles.ts';

const ExpensesContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesHeader />
      <ExpensesList />
      <ThemeController />
    </SafeAreaView>
  );
};

export default ExpensesContainer;
