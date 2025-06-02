import {StyleSheet} from 'react-native';

export const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 40,
      backgroundColor: '#fff',
    },
    header: {
      textAlign: 'center',
      fontSize: 16,
      marginBottom: 20,
    },
    matchText: {
      fontSize: 28,
      color: '#ff4081',
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'Cochin',
    },
    imageContainer: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: '#ff4081',
      borderWidth: 3,
      marginHorizontal: 10,
    },
    dotsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    dot: {
      width: 8,
      height: 8,
      backgroundColor: '#ccc',
      borderRadius: 4,
      marginHorizontal: 4,
    },
    dotActive: {
      width: 8,
      height: 8,
      backgroundColor: '#ff4081',
      borderRadius: 4,
      marginHorizontal: 4,
    },
    termsText: {
      fontSize: 12,
      textAlign: 'center',
      color: '#888',
      marginBottom: 30,
    },
    link: {
      textDecorationLine: 'underline',
      color: '#000',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      marginHorizontal: 10,
    },
    fbButton: {
      backgroundColor: '#3b5998',
    },
    fbText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    googleButton: {
      backgroundColor: '#db4437',
    },
    googleText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    footerText: {
      fontSize: 12,
      color: '#888',
      marginTop: 10,
    },
  });
};
