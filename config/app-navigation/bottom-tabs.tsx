import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../../screens/login';
import {Home} from '../../screens/home';
import {navigationConstants} from '../../constants/app-navigation';
import {HomeRoute} from './home-route';
import {AuthenticationRoute} from './authentication-route';
import {ProfileRoute} from './profile-route';
import {Profile} from '../../screens/profile';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={navigationConstants.HOME} component={Home} />
      <Tab.Screen name={navigationConstants.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
