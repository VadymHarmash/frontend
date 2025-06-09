import { Text, View } from "react-native";
import { styles } from "./styles/LoadingContainerStyles.ts";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { store, useAppSelector } from "../../store";
import { IRootStackParamList } from "../../types/IRootStackParamList.ts";
import auth from "@react-native-firebase/auth";
import { setIsAuth } from "../../store/slices/expenses.slice.ts";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  "Login"
>;

const LoadingContainer = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = store.dispatch;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Firebase: User is signed in", user.uid);
        dispatch(setIsAuth(true));
        navigation.navigate("Expenses");
      } else {
        console.log("Firebase: User is signed out");
        dispatch(setIsAuth(false));
        navigation.navigate("Login");
      }
    });

    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingContainer;
