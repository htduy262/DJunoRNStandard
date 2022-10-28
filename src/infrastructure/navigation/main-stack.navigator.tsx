import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screenEnum} from '../../enums/screenEnum';
import HomeScreen from '../../features/home/screens/home.screen';
import {PrintNavigator} from './print.navigator';

const Tab = createBottomTabNavigator();

export const MainStackNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
    <Tab.Group screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenEnum.home} component={HomeScreen} />
      <Tab.Screen name={screenEnum.print} component={PrintNavigator} />
    </Tab.Group>
  </Tab.Navigator>
);
