import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles/LoginFormStyles.ts";
import auth from "@react-native-firebase/auth";
import { useAppDispatch } from "../../store";
import { setIsAuth } from "../../store/slices/expenses.slice.ts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../types/IRootStackParamList.ts";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  "Login"
>;

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      dispatch(setIsAuth(true));
      alert("Registration successful! You can now log in.");
    } catch (e: unknown) {
      dispatch(setIsAuth(false));
      console.error("Registration error:", e);
      let errorMessage = "Registration failed: An unknown error occurred.";
      if (e instanceof Error) {
        errorMessage = `Registration failed: ${e.message}`;
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      dispatch(setIsAuth(true));
      await auth().signInWithEmailAndPassword(email, password);
      alert("Login successful!");
      navigation.navigate("Expenses");
    } catch (error: unknown) {
      dispatch(setIsAuth(false));
      console.error("Sign in error:", error);
      let errorMessage = "Sign in failed: An unexpected error occurred.";
      if (error instanceof Error) {
        errorMessage = `Sign in failed: ${error.message}`;
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text style={styles.title}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
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
