import * as React from 'react';
import {LogBox} from 'react-native';
import {AppNavigation} from './config/app-navigation';

function App() {
  if (__DEV__) {
    import('./reactotron-config');
    LogBox.ignoreAllLogs();
  }
  return <AppNavigation />;
}

export default App;
