import {useEffect} from 'react';
import {Text} from 'react-native';
import {useCurrentStep} from '../../api/auth';
import {useNavigation} from '@react-navigation/native';
import {navigationConstants} from '../../constants/app-navigation';

export const Stepper = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('fjdbjdbfn');
    useCurrentStep()
      .then(res => {
        navigation.navigate(res?.data?.routeName, {
          screen: res?.data?.route,
          params: {},
        });
      })
      .catch(() =>
        navigation.navigate(navigationConstants.LOGIN_ROUTE, {
          screen: navigationConstants.LOGIN,
          params: {},
        }),
      );
  }, []);
  return <Text>Stepper</Text>;
};
