import {StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/dimensions';
import {defaultTheme} from '../../config/theme';

export const createStyleSheet = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    loginContainer: {
      position: 'absolute',
      backgroundColor: '#fdf6f7',
      left: 16,
      right: 16,
      bottom: 16,
      width: screenWidth - 32,
      paddingVertical: 32,
      paddingHorizontal: 32,
      borderRadius: 16,
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
    },
    title: {
      color: 'white',
      fontWeight: '700',
      fontSize: 40,
      top: 180,
    },
    input: {
      marginBottom: 16,
    },
    loginTitle: {
      color: '#303237',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 20,
      marginBottom: 8,
    },
    loginSubTitle: {
      color: '#303237',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 12,
      marginBottom: 16,
    },
    otpContainer: {
      marginVertical: 30,
    },
    titleBackContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 16,
      marginLeft: -4,
    },
    backBtn: {
      marginBottom: 8,
    },
    carouselTitle: {
      fontSize: 32,
      textAlign: 'center',
      color: defaultTheme.black,
      fontWeight: '600',
      marginBottom: 16,
    },
    carouselSubTitle: {
      fontSize: 16,
      textAlign: 'center',
      color: defaultTheme.black,
      fontWeight: '400',
    },
    textContainer: {
      paddingHorizontal: 64,
      marginTop: 32,
    },
  });
};
