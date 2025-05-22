import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../../constants/app-navigation';
import {Login} from '../../screens/login';
import {Home} from '../../screens/home';

const HomeStack = createNativeStackNavigator();

export const HomeRoute = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={navigationConstants.HOME} component={Home} />
    </HomeStack.Navigator>
  );
};
