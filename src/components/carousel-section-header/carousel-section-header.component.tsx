import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../infrastructure/theme/colors';
import {spacing} from '../../infrastructure/theme/spacings';
import {fontSizes} from '../../infrastructure/theme/fonts';
import {Button} from 'react-native-elements';
import {useTranslation} from 'react-i18next';

const CarouselSectionHeader = ({
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

export default CarouselSectionHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    marginVertical: spacing.medium,
    marginHorizontal: spacing.medium,
    paddingBottom: 2,
    borderBottomWidth: 0.5,
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
    fontSize: fontSizes.smallButton,
    fontWeight: '800',
    color: '#000',
  },
});
