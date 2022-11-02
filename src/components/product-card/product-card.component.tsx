import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Image} from 'react-native-elements';
import {spacing} from '../../infrastructure/theme/spacings';
import {fontSizes} from '../../infrastructure/theme/fonts';
import {colors} from '../../infrastructure/theme/colors';
import {sizes} from '../../infrastructure/theme/sizes';

const ProductCard = ({
  imageUrl = 'imageUrl',
  // imageTagLabel = 'imageTagLabel',
  title = 'title',
  buttonTitle = 'buttonTitle',
  onButtonPress,
}: {
  imageUrl: string;
  //   imageTagLabel: string;
  title: string;
  buttonTitle: string;
  onButtonPress?: () => {};
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          height={1}
          width={1}
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Button
        title={buttonTitle}
        onPress={onButtonPress}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        type={'outline'}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapperStyle: {},
  container: {
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: 'transparent',
    backgroundColor: colors.ui.tertiary,
    marginRight: spacing.medium,
    padding: 0,
    margin: 0,
    maxWidth: 120,
    minHeight: 120,
    borderRadius: sizes.small,
    shadowOpacity: 0,
    borderWidth: 0,
  },
  title: {
    fontSize: fontSizes.caption,
    color: colors.text.primary,
    fontWeight: '500',
    padding: spacing.smallX,
  },
  buttonTitle: {
    fontSize: fontSizes.smallButton,
    fontWeight: 'bold',
    color: colors.ui.primary,
  },
  button: {
    marginHorizontal: spacing.smallX,
    marginBottom: spacing.smallX,
    borderRadius: sizes.medium,
    borderColor: colors.ui.secondary,
    borderWidth: 0.3,
    padding: spacing.smallXX,
    margin: 0,
  },
  image: {
    height: 120,
    width: 120,
    borderTopRightRadius: sizes.small,
    borderTopLeftRadius: sizes.small,
  },
});
