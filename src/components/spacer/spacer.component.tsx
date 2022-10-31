import React, {ReactNode} from 'react';
import {View} from 'react-native';

export const Spacer = ({
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  children,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  children?: ReactNode;
}) => {
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
      }}>
      {children}
    </View>
  );
};
