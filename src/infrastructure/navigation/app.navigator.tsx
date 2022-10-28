import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screenEnum} from '../../enums/screenEnum';
import {MainStackNavigator} from './main-stack.navigator';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenEnum.mainStack}
        component={MainStackNavigator}
      />
    </Stack.Group>
  </Stack.Navigator>
);
