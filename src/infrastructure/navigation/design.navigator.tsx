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

export const DesignNavigator = () => {
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
          name={screenEnum.designLogo}
          component={PrintOfficeScreen}
          options={{
            tabBarLabel: t('labels.logo').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designBrandIdentify}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.brandIdentify').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designSalesKitRealEstateProject}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.salesKitRealEstateProject').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designPublicationsOffice}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.publicationsOffice').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designPublicationsPackaging}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.publicationsPackaging').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designPublicationsEventing}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.publicationsEventing').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designPublicationsMedia}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.publicationsMedia').toString(),
          }}
        />
        <Tab.Screen
          name={screenEnum.designPublicationsFurniture}
          component={PrintMediaScreen}
          options={{
            tabBarLabel: t('labels.publicationsFurniture').toString(),
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
