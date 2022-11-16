import {
  NavigationProp,
  useNavigation,
  useScrollToTop,
} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CarouselSectionHeader from '../../../components/carousel-section-header/carousel-section-header.component';
import CarouselSection from '../../../components/carousel-section/carousel-section.component';
import LinkButton from '../../../components/link-button/link-button.component';
import PostCard from '../../../components/post-card/post-card.component';
import ProductCard from '../../../components/product-card/product-card.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import SectionHeaderTitle from '../../../components/section-header-title/section-header-title.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {screenEnum} from '../../../enums/screenEnum';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {spacing} from '../../../infrastructure/theme/spacings';
import {ProductsContext} from '../../../services/products/products.context';

const HomeScreen = () => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<any>>();
  const {home, fetchHomeData} = useContext(ProductsContext);

  useEffect(() => {
    console.log('home', home);
  }, [home]);

  useEffect(() => {
    // Fetch data
    fetchHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollViewRef = React.useRef(null);
  useScrollToTop(scrollViewRef);

  return (
    <SafeArea style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.bannerContainer}>
          <Image
            height={1}
            width={1}
            source={{
              uri: 'https://inanbinhduong.vn/Content/images/slider/20221006/slider1234.jpg',
            }}
            containerStyle={styles.image}
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
          <Spacer left={spacing.smallX} />
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
          {home?.printData?.featuredPublications?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingOffice').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printOffice);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingOffice?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingMedia').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printMedia);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingMedia?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingPackaging').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printPackage);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingPackaging?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingTetCalendar').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printTetCalendar);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingTetCalendar?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingAdvertising').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printAdvertising);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingAdvertising?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <CarouselSectionHeader
          title={t('labels.printingOther').toUpperCase()}
          onButtonPress={() => {
            navigation.navigate(screenEnum.printOthers);
          }}
        />
        <CarouselSection>
          {home?.printData?.printingOther?.map(
            ({
              id,
              title,
              imageUrl,
            }: {
              id: number;
              title: string;
              imageUrl: string;
            }) => {
              return (
                <ProductCard
                  key={id}
                  imageUrl={imageUrl}
                  title={title}
                  buttonTitle={t('labels.bookPrintingNow')}
                />
              );
            },
          )}
        </CarouselSection>
        <Spacer top={spacing.medium} />
        <View style={styles.newsSectionContainer}>
          <Spacer top={spacing.medium} />
          <View style={styles.rowSection}>
            <SectionHeaderTitle title={t('labels.newPost')} />
            <LinkButton
              title={`→ ${t('labels.seeMore').toLocaleUpperCase()}`}
            />
          </View>
          <Spacer top={spacing.medium} />
          <PostCard
            title={
              'NHỮNG CHẤT LIỆU THƯỜNG ĐƯỢC SỬ DỤNG ĐỂ THIẾT KẾ IN ẤN KẸP FILE'
            }
            subTitle={'By Tiểu Mụi / October 31'}
            label={'Wiki Printing'}
            description={
              'Kẹp file hồ sơ đang dần trở thành yếu tố quan trọng trong bộ nhận diên thương hiệu của doanh nghiệp. Nó hỗ trợ doanh nghiệp trong việc cung cấp thông tin, truyền tải thông điệp đến khách hàng, đối tác. Chất liệu in kẹp file luôn được lựa chọn cẩn thận, hãy cùng tìm hiểu về những chất liệu được sử dụng nhiều nhất hiện nay.'
            }
            buttonTitle={'Đọc tiếp'}
          />
          <PostCard
            title={
              'NHỮNG CHẤT LIỆU THƯỜNG ĐƯỢC SỬ DỤNG ĐỂ THIẾT KẾ IN ẤN KẸP FILE'
            }
            subTitle={'By Tiểu Mụi / October 31'}
            label={'Wiki Printing'}
            description={
              'Kẹp file hồ sơ đang dần trở thành yếu tố quan trọng trong bộ nhận diên thương hiệu của doanh nghiệp. Nó hỗ trợ doanh nghiệp trong việc cung cấp thông tin, truyền tải thông điệp đến khách hàng, đối tác. Chất liệu in kẹp file luôn được lựa chọn cẩn thận, hãy cùng tìm hiểu về những chất liệu được sử dụng nhiều nhất hiện nay.'
            }
            buttonTitle={'Đọc tiếp'}
          />
          <PostCard
            title={
              'NHỮNG CHẤT LIỆU THƯỜNG ĐƯỢC SỬ DỤNG ĐỂ THIẾT KẾ IN ẤN KẸP FILE'
            }
            subTitle={'By Tiểu Mụi / October 31'}
            label={'Wiki Printing'}
            description={
              'Kẹp file hồ sơ đang dần trở thành yếu tố quan trọng trong bộ nhận diên thương hiệu của doanh nghiệp. Nó hỗ trợ doanh nghiệp trong việc cung cấp thông tin, truyền tải thông điệp đến khách hàng, đối tác. Chất liệu in kẹp file luôn được lựa chọn cẩn thận, hãy cùng tìm hiểu về những chất liệu được sử dụng nhiều nhất hiện nay.'
            }
            buttonTitle={'Đọc tiếp'}
          />
        </View>
      </ScrollView>
      <View style={[styles.header, {top: insets.top}]}>
        <View style={styles.logo}>
          <Image
            height={1}
            width={1}
            source={{
              uri: 'https://inanbinhduong.vn/Content/images/logo/logo-in-an-binh-duong.png',
            }}
            containerStyle={styles.image}
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
    paddingBottom: 150,
  },
  rowSection: {
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    padding: spacing.medium,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  image: {
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
  newsSectionContainer: {
    flex: 1,
    backgroundColor: colors.ui.tertiary,
  },
});
