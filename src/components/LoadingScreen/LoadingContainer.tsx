import { Text, View } from 'react-native';
import { getThemedStyles } from './styles/LoadingContainerStyles.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { IRootStackParamList } from '../../types/IRootStackParamList.ts';
import auth from '@react-native-firebase/auth';
import { setIsAuth, setUserEmail } from '../../store/slices/user.slice.ts';
import { getColors } from '../../constants/colors.ts';
import { IThemeColors } from '../../types/IThemeColors.ts';
import { loadTheme } from '../../store/thunks/theme.thunk.ts';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Login'
>;

const LoadingContainer = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);
  const currentColors: IThemeColors = getColors(theme);
  const styles = getThemedStyles(currentColors);

  useEffect(() => {
    dispatch(loadTheme());

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
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingContainer;
