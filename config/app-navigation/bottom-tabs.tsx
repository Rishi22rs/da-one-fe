import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationConstants} from '../../constants/app-navigation';
import {HomeRoute} from './home-route';
import {Profile} from '../../screens/profile';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={navigationConstants.HOME} component={HomeRoute} />
      <Tab.Screen name={navigationConstants.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
