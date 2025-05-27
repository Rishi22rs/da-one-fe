import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../../constants/app-navigation';
import {Login} from '../../screens/login';
import {Onboarding} from '../../screens/onboarding';

const AuthenticationStack = createNativeStackNavigator();

export const AuthenticationRoute = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen
        name={navigationConstants.LOGIN}
        component={Login}
      />
      <AuthenticationStack.Screen
        name={navigationConstants.ONBOARDING}
        component={Onboarding}
      />
    </AuthenticationStack.Navigator>
  );
};
