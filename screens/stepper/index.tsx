import {useEffect} from 'react';
import {Text} from 'react-native';
import {useCurrentStep} from '../../api/auth';
import {useNavigation} from '@react-navigation/native';
import {navigationConstants} from '../../constants/app-navigation';

export const Stepper = () => {
  const navigation = useNavigation();
  useEffect(() => {
    useCurrentStep()
      .then(res => {
        navigation.replace(res?.data?.routeName, {
          screen: res?.data?.route,
          params: {},
        });
      })
      .catch(() =>
        navigation.replace(navigationConstants.LOGIN_ROUTE, {
          screen: navigationConstants.LOGIN,
          params: {},
        }),
      );
  }, []);
  return <Text>Stepper</Text>;
};
