import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../../constants/app-navigation';
import {Login} from '../../screens/login';
import {Home} from '../../screens/home';
import {Profile} from '../../screens/profile';
import {ProfileEdit} from '../../screens/profile-edit';

const ProfileStack = createNativeStackNavigator();

export const ProfileRoute = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen
        name={navigationConstants.PROFILE_EDIT}
        component={ProfileEdit}
      />
    </ProfileStack.Navigator>
  );
};
