import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {colors} from '../../infrastructure/theme/colors';
import {fontSizes} from '../../infrastructure/theme/fonts';

const LinkButton = ({
  title = 'title',
  onButtonPress,
}: {
  title: string;
  onButtonPress?: () => {};
}) => {
  return (
    <Button
      type="clear"
      title={title}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      onPress={onButtonPress}
    />
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.button,
    color: colors.ui.primary,
    fontWeight: 'bold',
  },
  button: {
    padding: 0,
    alignSelf: 'flex-start',
    // backgroundColor: 'yellow',
  },
});
