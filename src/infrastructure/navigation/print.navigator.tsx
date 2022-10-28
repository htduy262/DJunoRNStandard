import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {screenEnum} from '../../enums/screenEnum';
import PrintOfficeScreen from '../../features/print/screens/print-office.screen';
import PrintMediaScreen from '../../features/print/screens/print-media.screen';

const Tab = createMaterialTopTabNavigator();

export const PrintNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screenEnum.printOffice} component={PrintOfficeScreen} />
      <Tab.Screen name={screenEnum.printMedia} component={PrintMediaScreen} />
    </Tab.Navigator>
  );
};
