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
    image: {
      height: 400,
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent',
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      backgroundColor: 'transparent',
    },
    contentStyle: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      marginTop: 30,
      backgroundColor: 'transparent',
    },
    ctaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: screenWidth / 2 - 150,
    },
    ctaText: {
      color: 'white',
    },
    cta: {
      width: screenWidth / 2 - 32,
    },
    nameText: {
      fontSize: 24,
      fontWeight: '600',
      color: hexToRgbA(defaultTheme.black, 80),
    },
    distanceText: {
      fontSize: 16,
      fontWeight: '500',
      color: hexToRgbA(defaultTheme.black, 80),
    },
    tableTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: hexToRgbA(defaultTheme.black, 80),
      marginTop: 4,
    },
    description: {
      fontSize: 14,
      fontWeight: '400',
      color: hexToRgbA(defaultTheme.black, 80),
    },
    seperator: {
      borderBottomWidth: 1,
      borderBottomColor: hexToRgbA(defaultTheme.brown, 0.05),
      width: '100%',
      marginTop: 12,
      marginBottom: 6,
    },
    likeUnlikeCtaContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
};
