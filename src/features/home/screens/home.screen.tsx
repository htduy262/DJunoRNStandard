import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import SafeArea from '../../../components/SafeArea';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {spacing} from '../../../infrastructure/theme/spacings';

const HomeScreen = () => {
  const {t} = useTranslation();

  return (
    <SafeArea style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            height={1}
            width={1}
            source={{
              uri: 'https://inanbinhduong.vn/Content/images/logo/logo-in-an-binh-duong.png',
            }}
            containerStyle={{flex: 1}}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="contain"
          />
        </View>
        <Button
          title={t('labels.getAQuote').toUpperCase()}
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonContainer}
        />
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.bannerContainer}>
          <Image
            height={1}
            width={1}
            source={{
              uri: 'https://inanbinhduong.vn/Content/images/slider/20221006/slider1234.jpg',
            }}
            containerStyle={styles.bannerImage}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ui.primary,
  },
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 80,
    paddingHorizontal: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    // backgroundColor: 'yellow',
  },
  bannerContainer: {
    height: 148,
    backgroundColor: colors.ui.primary,
  },
  bannerImage: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: colors.ui.primary,
  },
  buttonText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: fontSizes.button,
    fontWeight: 'bold',
  },
});
