import { Text, View } from 'react-native';
import { styles } from './styles/LoadingContainerStyles.ts';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { store } from '../../store';
import { IRootStackParamList } from '../../types/IRootStackParamList.ts';
import auth from '@react-native-firebase/auth';
import { setIsAuth, setUserEmail } from '../../store/slices/user.slice.ts';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Login'
>;

const LoadingContainer = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = store.dispatch;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setIsAuth(true));
        user.email && dispatch(setUserEmail(user.email));
        navigation.navigate('Expenses');
      } else {
        dispatch(setIsAuth(false));
        navigation.navigate('Login');
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
