import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthenticationContextProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthenticationContextProvider>
  );
};

export default App;
