import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import SafeArea from '../../components/safe-area/safe-area.component';
import {screenEnum} from '../../enums/screenEnum';
import PrintMediaScreen from '../../features/print/screens/print-media.screen';
import PrintOfficeScreen from '../../features/print/screens/print-office.screen';
import {colors} from '../theme/colors';
import {fontSizes} from '../theme/fonts';
import {spacing} from '../theme/spacings';

const Tab = createMaterialTopTabNavigator();

export const PrintNavigator = () => {
  const {t} = useTranslation();
  return (
    <SafeArea style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: colors.ui.primary,
          },
          tabBarActiveTintColor: colors.text.primary,
          tabBarItemStyle: {
            paddingHorizontal: spacing.medium,
            width: 'auto',
          },
          tabBarScrollEnabled: true,
          tabBarLabelStyle: styles.tabBarLabelStyles,
        }}>
        <Tab.Screen
          name={screenEnum.printOffice}
          component={PrintOfficeScreen}
          options={{
            tabBarLabel: t('labels.printingOffice').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.printMedia}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.printingMedia').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.printPackage}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.printingPackaging').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.printTetCalendar}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.printingTetCalendar').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.printAdvertising}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.printingAdvertising').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.printOthers}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.printingOther').toString(),
          }}
        />
      </Tab.Navigator>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ui.primary,
  },
  tabBarLabelStyles: {
    // backgroundColor: 'red',
    fontSize: fontSizes.body,
    fontWeight: 'bold',
  },
});
