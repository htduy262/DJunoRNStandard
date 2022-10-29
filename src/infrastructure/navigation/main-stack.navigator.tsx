import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {screenEnum} from '../../enums/screenEnum';
import HomeScreen from '../../features/home/screens/home.screen';
import MoreScreen from '../../features/more/screens/more.screen';
import {colors} from '../theme/colors';
import {fontSizes} from '../theme/fonts';
import {sizes} from '../theme/sizes';
import {DesignNavigator} from './design.navigator';
import {PrintNavigator} from './print.navigator';

const Tab = createBottomTabNavigator();

const TAB_INFO = {
  [screenEnum.home.toString()]: {
    icon: 'home-circle',
    label: 'Trang Chủ',
  },
  [screenEnum.print.toString()]: {
    icon: 'tray-full',
    label: 'In Ấn',
  },
  [screenEnum.design.toString()]: {
    icon: 'draw-pen',
    label: 'Thiết Kế',
  },
  [screenEnum.more.toString()]: {
    icon: 'reorder-horizontal',
    label: 'Thêm',
  },
};

const createScreenOptions = ({route}: {route: {name: string}}) => {
  const iconName = TAB_INFO[route.name].icon;
  const tabBarLabel = TAB_INFO[route.name].label;
  return {
    tabBarActiveTintColor: colors.ui.primary,
    tabBarInactiveTintColor: colors.ui.disabled,
    tabBarIcon: ({color}: {color: string}) => (
      <Icon name={iconName} size={sizes[2]} color={color} />
    ),
    tabBarLabel: ({color}: {color: string}) => {
      return (
        <Text style={{color, fontSize: fontSizes.caption}}>{tabBarLabel}</Text>
      );
    },
  };
};

export const MainStackNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Group screenOptions={{headerShown: false}}>
      <Tab.Screen name={screenEnum.home} component={HomeScreen} />
      <Tab.Screen name={screenEnum.print} component={PrintNavigator} />
      <Tab.Screen name={screenEnum.design} component={DesignNavigator} />
      <Tab.Screen name={screenEnum.more} component={MoreScreen} />
    </Tab.Group>
  </Tab.Navigator>
);
