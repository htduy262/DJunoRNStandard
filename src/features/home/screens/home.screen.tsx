import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CarouselSectionHeader from '../../../components/carousel-section-header/carousel-section-header.component';
import CarouselSection from '../../../components/carousel-section/carousel-section.component';
import ProductCard from '../../../components/product-card/product-card.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {spacing} from '../../../infrastructure/theme/spacings';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <SafeArea style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
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
        <CarouselSectionHeader
          title={t('labels.featuredPublications').toUpperCase()}
        />
        <View style={styles.rowSection}>
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
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingOffice').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingMedia').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingPackaging').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingTetCalendar').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingAdvertising').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingOther').toUpperCase()}
        />
        <CarouselSection>
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu lịch để bàn năm 2023'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'In ấn mẫu Bloc lịch 20x30cm năm 2023 haha hihi'}
            buttonTitle={'Đặt in ngay'}
          />
          <ProductCard
            imageUrl={
              'https://inanbinhduong.vn/Content/images/products/VP00/VP01/VP01004/in-phong-bi-a4-1st-202205031410.jpg'
            }
            title={'Phong bi giay Kraft'}
            buttonTitle={'Đặt in ngay'}
          />
        </CarouselSection>
      </ScrollView>
      <View style={[styles.header, {top: insets.top}]}>
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
    marginTop: 65,
    paddingBottom: 200,
  },
  rowSection: {
    flex: 1,
    flexDirection: 'row',
    padding: spacing.medium,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: 65,
    paddingHorizontal: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
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
