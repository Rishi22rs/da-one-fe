import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/dimensions';
import {hexToRgbA} from '../../utils/hexToRgba';
import {defaultTheme} from '../../config/theme';

export const createStyleSheet = () => {
  return StyleSheet.create({
    background: {
      flexGrow: 1,
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingBottom: 100,
    },
  });
};
