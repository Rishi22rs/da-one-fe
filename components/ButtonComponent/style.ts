import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../config/theme';

export const createStyleSheet = () => {
  return StyleSheet.create({
    navigateButton: {
      paddingHorizontal: 62,
      paddingVertical: 18,
      backgroundColor: defaultTheme.brown,
      borderRadius: 16,
      alignItems: 'center',
    },
    navigate: {
      fontSize: 16,
      fontWeight: 700,
      color: 'white',
    },
    text: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
    },
  });
};
