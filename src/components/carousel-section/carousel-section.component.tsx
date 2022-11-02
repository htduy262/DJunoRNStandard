import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {spacing} from '../../infrastructure/theme/spacings';

const CarouselSection = ({children}: {children: ReactNode}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {children}
    </ScrollView>
  );
};

export default CarouselSection;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    paddingHorizontal: spacing.medium,
    marginVertical: spacing.smallX,
  },
});
