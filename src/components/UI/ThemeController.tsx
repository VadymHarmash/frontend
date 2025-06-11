import { TouchableOpacity, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { setMode } from '../../store/slices/theme.slice.ts';
import { Theme } from '../../types/enums/Theme.ts';
import { styles } from './styles/ThemeControllerStyles.ts';
import { getColors } from '../../constants/colors.ts';

const ThemeController = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const currentColors = getColors(theme);

  const changeTheme = () => {
    theme === Theme.Light
      ? dispatch(setMode(Theme.Dark))
      : dispatch(setMode(Theme.Light));
  };

  return (
    <TouchableOpacity
      style={[
        styles.themeController,
        {
          backgroundColor: currentColors.surface,
        },
      ]}
      onPress={changeTheme}>
      <Text style={{ color: currentColors.textPrimary }}>
        {theme === Theme.Light ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeController;
