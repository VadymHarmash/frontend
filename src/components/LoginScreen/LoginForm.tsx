import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { getThemedStyles } from './styles/LoginFormStyles.ts';
import auth from '@react-native-firebase/auth';
import { useAppDispatch, useAppSelector } from '../../store';
import { setIsAuth, setUserEmail } from '../../store/slices/user.slice.ts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from '../../types/IRootStackParamList.ts';
import ThemeController from '../UI/ThemeController.tsx';
import { getColors } from '../../constants/colors.ts';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Login'
>;

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);
  const currentColors = getColors(theme);
  const styles = getThemedStyles(currentColors);

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const validateInputs = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }

    if (password.length < 8) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 8 characters long.',
      );
      return false;
    }

    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (userCredential.user?.email) {
        dispatch(setUserEmail(userCredential.user.email));
      }
      dispatch(setIsAuth(true));
      Alert.alert('Success', 'Registration successful!');
    } catch (e: unknown) {
      dispatch(setIsAuth(false));
      console.error('Registration error:', e);
      let errorMessage = 'Registration failed: An unknown error occurred.';
      if (e instanceof Error) {
        errorMessage = `Registration failed: ${e.message}`;
      }
      Alert.alert('Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      if (userCredential.user?.email) {
        dispatch(setUserEmail(userCredential.user.email));
      }
      dispatch(setIsAuth(true));
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Expenses');
    } catch (error: unknown) {
      dispatch(setIsAuth(false));
      console.error('Sign in error:', error);
      let errorMessage = 'Sign in failed: An unexpected error occurred.';
      if (error instanceof Error) {
        errorMessage = `Sign in failed: ${error.message}`;
      }
      Alert.alert('Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemeController />
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={currentColors.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={currentColors.textSecondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />

        {loading ? (
          <ActivityIndicator size="large" color={currentColors.primary} />
        ) : (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignUp}
              disabled={loading}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={handleSignIn}
              disabled={loading}>
              <Text style={styles.buttonSecondaryText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginForm;
