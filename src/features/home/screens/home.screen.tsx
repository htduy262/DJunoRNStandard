import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import CarouselSection from '../../../components/carousel-section/carousel-section.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import {Spacer} from '../../../components/spacer/spacer.component';
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
          titleStyle={styles.buttonTitle}
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
        <CarouselSection
          title={t('labels.featuredPublications').toUpperCase()}
        />
        <View style={{flex: 1, flexDirection: 'row', padding: spacing.medium}}>
          <View style={styles.imageButtonContainer}>
            <Image
              height={1}
              width={1}
              source={{
                uri: 'https://inanbinhduong.vn/Content/images/banner/20220427/Khuyen-mai-In-Tui-giay---In-an-Binh-Duong-1st-0521.jpg',
              }}
              containerStyle={styles.imageButton}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="contain"
            />
          </View>
          <Spacer left={spacing.small} />
          <View style={styles.imageButtonContainer}>
            <Image
              height={1}
              width={1}
              source={{
                uri: 'https://inanbinhduong.vn/Content/images/banner/20220504/In-Folder-gia-cuc-soc-Binh-Duong---In-an-Binh-Duong-2st-0259.png',
              }}
              containerStyle={styles.imageButton}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="contain"
            />
          </View>
        </View>
        <CarouselSection title={t('labels.printingOffice').toUpperCase()} />
        <CarouselSection title={t('labels.printingMedia').toUpperCase()} />
        <CarouselSection title={t('labels.printingPackaging').toUpperCase()} />
        <CarouselSection
          title={t('labels.printingTetCalendar').toUpperCase()}
        />
        <CarouselSection
          title={t('labels.printingAdvertising').toUpperCase()}
        />
        <CarouselSection title={t('labels.printingOther').toUpperCase()} />
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
  imageButtonContainer: {
    flex: 1,
    width: '100%',
  },
  imageButton: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    backgroundColor: colors.ui.primary,
  },
  buttonTitle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: fontSizes.button,
    fontWeight: 'bold',
  },
});
