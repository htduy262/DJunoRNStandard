import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../infrastructure/theme/fonts';

const InformationRow = ({
  infoLabel,
  valueLabel,
  leftControl,
}: {
  infoLabel: string;
  valueLabel?: string;
  leftControl?: ReactNode;
}) => {
  if (!infoLabel?.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.infoLabel}>{infoLabel}</Text>
      </View>
      <View style={styles.rightContainer}>
        {leftControl}
        {!!valueLabel && <Text style={styles.valueLabel}>{valueLabel}</Text>}
      </View>
    </View>
  );
};

export default InformationRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  leftContainer: {
    flex: 5,
    minHeight: 38,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  rightContainer: {
    flex: 3,
    minHeight: 38,
    alignItems: 'flex-end',
    // backgroundColor: 'green',
  },
  infoLabel: {fontSize: fontSizes.h4, fontWeight: 'bold'},
  valueLabel: {fontSize: fontSizes.h4},
});
