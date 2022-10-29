import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import SafeArea from '../../components/SafeArea';
import TopTabBarLabel from '../../components/TopTabBarLabel';
import {screenEnum} from '../../enums/screenEnum';
import PrintMediaScreen from '../../features/print/screens/print-media.screen';
import PrintOfficeScreen from '../../features/print/screens/print-office.screen';
import {colors} from '../theme/colors';

const Tab = createMaterialTopTabNavigator();

const TAB_INFO = {
  [screenEnum.printOffice.toString()]: {
    label: 'IN ẤN VĂN PHÒNG',
  },
  [screenEnum.printMedia.toString()]: {
    label: 'IN ẤN TRUYỀN THÔNG',
  },
  [screenEnum.printPackage.toString()]: {
    label: 'IN ẤN BAO BÌ',
  },
};

const createScreenOptions = ({route}: {route: {name: string}}) => {
  const tabBarLabel = TAB_INFO[route.name]?.label;
  return {
    tabBarIndicatorStyle: {
      backgroundColor: colors.ui.primary,
    },
    tabBarScrollEnabled: true,
    tabBarLabel: ({color}: {color: string}) => {
      return <TopTabBarLabel tabBarLabel={tabBarLabel} color={color} />;
    },
  };
};

export const DesignNavigator = () => {
  return (
    <SafeArea>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name={screenEnum.printOffice}
          component={PrintOfficeScreen}
        />
        <Tab.Screen name={screenEnum.printMedia} component={PrintMediaScreen} />
        <Tab.Screen
          name={screenEnum.printPackage}
          component={PrintMediaScreen}
        />
        <Tab.Screen
          name={screenEnum.printTetCalendar}
          component={PrintMediaScreen}
        />
      </Tab.Navigator>
    </SafeArea>
  );
};
