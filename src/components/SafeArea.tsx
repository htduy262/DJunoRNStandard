import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeArea = ({children}: {children: ReactNode}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({container: {flexGrow: 1}});
