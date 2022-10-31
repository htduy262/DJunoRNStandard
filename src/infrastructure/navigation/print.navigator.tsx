import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text} from 'react-native';
import SafeArea from '../../components/safe-area/safe-area.component';
import {screenEnum} from '../../enums/screenEnum';
import PrintMediaScreen from '../../features/print/screens/print-media.screen';
import PrintOfficeScreen from '../../features/print/screens/print-office.screen';
import {colors} from '../theme/colors';
import {fontSizes} from '../theme/fonts';

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
  [screenEnum.printTetCalendar.toString()]: {
    label: 'IN ẤN LỊCH TẾT',
  },
  [screenEnum.printAdvertising.toString()]: {
    label: 'IN ẤN QUẢNG CÁO',
  },
  [screenEnum.printOthers.toString()]: {
    label: 'IN ẤN KHÁC',
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
      return (
        <Text style={{color, fontSize: fontSizes.caption, fontWeight: 'bold'}}>
          {tabBarLabel}
        </Text>
      );
    },
  };
};

export const PrintNavigator = () => {
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
        <Tab.Screen
          name={screenEnum.printAdvertising}
          component={PrintMediaScreen}
        />
        <Tab.Screen
          name={screenEnum.printOthers}
          component={PrintMediaScreen}
        />
      </Tab.Navigator>
    </SafeArea>
  );
};
