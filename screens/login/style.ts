import {StyleSheet} from 'react-native';

export const createStyleSheet = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    loginContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      bottom: 0,
      width: '100%',
      paddingVertical: 32,
      paddingHorizontal: 32,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
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
  });
};
