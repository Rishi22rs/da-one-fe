import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationConstants} from '../constants/app-navigation';
import {useNavigation} from '@react-navigation/native';

export const useLogout = () => {
  const navigation = useNavigation();

  return async () => {
    await AsyncStorage.clear();
    navigation.replace(navigationConstants.LOGIN_ROUTE, {
      name: navigationConstants.LOGIN,
    });
  };
};
