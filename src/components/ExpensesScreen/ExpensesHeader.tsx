import { View, Text, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './styles/ExpensesHeaderStyles.ts';

const ExpensesHeader = () => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Logout error:', error);
      let errorMessage = 'Logout failed: An unknown error occurred.';
      if (error instanceof Error) {
        errorMessage = `Logout failed: ${error.message}`;
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>My expenses</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpensesHeader;
