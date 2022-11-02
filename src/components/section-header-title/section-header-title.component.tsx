import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {fontSizes} from '../../infrastructure/theme/fonts';
import {colors} from '../../infrastructure/theme/colors';

const SectionHeaderTitle = ({title = 'title'}: {title: string}) => {
  return <Text style={styles.title}>{title.toLocaleUpperCase()}</Text>;
};

export default SectionHeaderTitle;

const styles = StyleSheet.create({
  title: {
    // backgroundColor: 'red',
    fontSize: fontSizes.title,
    color: colors.text.primary,
    fontWeight: 'bold',
    alignContent: 'center',
  },
});
