import AsyncStorage from '@react-native-async-storage/async-storage';

export const getJwtToken = async () => {
  AsyncStorage.getItem('jwt-token').then(res => console.log('jwtt', res));
  return await AsyncStorage.getItem('jwt-token');
};
