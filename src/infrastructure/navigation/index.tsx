import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {AppNavigator} from './app.navigator';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : null}
    </NavigationContainer>
  );
};
