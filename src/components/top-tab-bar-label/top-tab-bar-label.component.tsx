import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes} from '../../infrastructure/theme/fonts';

const TopTabBarLabel = ({
  tabBarLabel,
  color,
}: {
  tabBarLabel: string;
  color: string;
}) => {
  return <Text style={[styles.label, {color}]}>{tabBarLabel}</Text>;
};

export default TopTabBarLabel;

const styles = StyleSheet.create({
  label: {fontSize: fontSizes.caption, fontWeight: 'bold'},
});
