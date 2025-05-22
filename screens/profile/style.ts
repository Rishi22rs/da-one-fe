import {StyleSheet} from 'react-native';

export const createStyleSheet = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    profileImage: {
      height: 200,
      width: 200,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    cta: {
      marginTop: 16,
    },
  });
};
