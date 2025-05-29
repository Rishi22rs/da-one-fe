import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../../constants/app-navigation';
import {Home} from '../../screens/home';
import {ItsAMatch} from '../../screens/match-screen';

const MatchStack = createNativeStackNavigator();

export const MatchMRoute = () => {
  return (
    <MatchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MatchStack.Screen
        name={navigationConstants.ITS_A_MATCH}
        component={ItsAMatch}
      />
    </MatchStack.Navigator>
  );
};
