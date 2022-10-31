import {StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeArea = ({
  style,
  children,
}: {
  style?: ViewStyle;
  children: ReactNode;
}) => {
  return (
    <SafeAreaView edges={['top']} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({container: {flexGrow: 1}});
