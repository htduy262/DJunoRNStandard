import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../../infrastructure/theme/spacings';
import {colors} from '../../infrastructure/theme/colors';
import {sizes} from '../../infrastructure/theme/sizes';
import {Image} from 'react-native-elements';
import {fontSizes} from '../../infrastructure/theme/fonts';
import {Spacer} from '../spacer/spacer.component';
import LinkButton from '../link-button/link-button.component';

const PostCard = ({
  title = 'title',
  subTitle = 'subTitle',
  label = 'label',
  description = 'description',
  buttonTitle = 'buttonTitle',
  onButtonPress,
}: {
  title: string;
  subTitle: string;
  label?: string;
  description?: string;
  buttonTitle: string;
  onButtonPress?: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          height={1}
          width={1}
          source={{
            uri: 'https://inanbinhduong.vn/Content/images/news/PRINTING/printing034/nhung-chat-lieu-thuong-duoc-su-dung-de-thiet-ke-in-an-kep-file.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Spacer top={spacing.medium} />
        <Text style={styles.subTitle}>{subTitle.toLocaleUpperCase()}</Text>
        <Spacer top={spacing.smallX} />
        <Text style={styles.title}>{title.toLocaleUpperCase()}</Text>
        <Spacer top={spacing.smallX} />
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <Text style={styles.label}>{label.toLocaleUpperCase()}</Text>
      </View>
      <Spacer top={spacing.medium} />
      <LinkButton title={buttonTitle} onButtonPress={onButtonPress} />
      <Spacer top={spacing.medium} />
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: 'transparent',
    marginBottom: spacing.medium,
    marginHorizontal: spacing.medium,
    paddingHorizontal: spacing.medium,
    borderRadius: sizes.small,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  image: {
    height: 230,
    marginTop: spacing.medium,
    borderRadius: sizes.small,
  },
  title: {
    fontSize: fontSizes.title,
    color: colors.text.primary,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: fontSizes.body,
    color: colors.ui.primary,
    fontWeight: '700',
  },
  description: {
    fontSize: fontSizes.h3,
    color: colors.text.secondary,
  },
  label: {
    fontSize: fontSizes.caption,
    color: 'white',
    fontWeight: '900',
    backgroundColor: colors.ui.primary,
    position: 'absolute',
    marginTop: spacing.medium,
    padding: spacing.smallXX,
  },
  buttonTitle: {
    fontSize: fontSizes.smallButton,
    fontWeight: 'bold',
    color: colors.ui.primary,
  },
});
