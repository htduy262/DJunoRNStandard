import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {screenEnum} from '../../enums/screenEnum';
import HomeScreen from '../../features/home/screens/home.screen';
import MoreScreen from '../../features/more/screens/more.screen';
import {ProductsContextProvider} from '../../services/products/products.context';
import {colors} from '../theme/colors';
import {fontSizes} from '../theme/fonts';
import {sizes} from '../theme/sizes';
import {DesignNavigator} from './design.navigator';
import {PrintNavigator} from './print.navigator';

const Tab = createBottomTabNavigator();

const TAB_INFO = {
  [screenEnum.home.toString()]: {
    icon: 'home-circle',
  },
  [screenEnum.print.toString()]: {
    icon: 'tray-full',
  },
  [screenEnum.design.toString()]: {
    icon: 'draw-pen',
  },
  [screenEnum.more.toString()]: {
    icon: 'reorder-horizontal',
  },
};

const createScreenOptions = ({route}: {route: {name: string}}) => {
  const iconName = TAB_INFO[route.name].icon;
  return {
    tabBarActiveTintColor: colors.ui.primary,
    tabBarInactiveTintColor: colors.ui.disabled,
    tabBarIcon: ({color}: {color: string}) => (
      <Icon name={iconName} size={sizes.largeX} color={color} />
    ),
    tabBarLabelStyle: styles.tabBarLabelStyles,
  };
};

export const MainStackNavigator = () => {
  const {t} = useTranslation();
  return (
    <ProductsContextProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Group screenOptions={{headerShown: false, lazy: false}}>
          <Tab.Screen
            name={screenEnum.home}
            component={HomeScreen}
            options={{
              tabBarLabel: t('labels.homepage').toString(),
            }}
          />
          <Tab.Screen
            name={screenEnum.print}
            component={PrintNavigator}
            options={{
              tabBarLabel: t('labels.print').toString(),
            }}
          />
          <Tab.Screen
            name={screenEnum.design}
            component={DesignNavigator}
            options={{
              tabBarLabel: t('labels.design').toString(),
            }}
          />
          <Tab.Screen
            name={screenEnum.more}
            component={MoreScreen}
            options={{
              tabBarLabel: t('labels.more').toString(),
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
    </ProductsContextProvider>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyles: {fontSize: fontSizes.body, fontWeight: 'bold'},
});
