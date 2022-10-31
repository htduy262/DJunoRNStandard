import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../infrastructure/theme/colors';
import {spacing} from '../../infrastructure/theme/spacings';
import {fontSizes} from '../../infrastructure/theme/fonts';
import {Button} from 'react-native-elements';
import {useTranslation} from 'react-i18next';

const CarouselSection = ({
  title,
  onButtonPress,
}: {
  title: string;
  onButtonPress?: () => {};
}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={`> ${t('labels.seeAll').toUpperCase()}`}
        type="clear"
        titleStyle={styles.buttonTitle}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default CarouselSection;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    marginVertical: spacing.medium,
    marginHorizontal: spacing.medium,
    paddingBottom: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.ui.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.medium,
    backgroundColor: colors.ui.primary,
    fontSize: fontSizes.caption,
    fontWeight: '800',
    color: '#fff',
  },
  buttonTitle: {
    fontSize: fontSizes.button,
    fontWeight: '800',
    color: '#000',
  },
});
