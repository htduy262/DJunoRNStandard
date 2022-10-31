import React, {useState} from 'react';
import SafeArea from '../../../components/SafeArea';
import {ButtonGroup} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, StyleSheet} from 'react-native';
import InformationRow from '../../../components/InformationRow';
import {spacing} from '../../../infrastructure/theme/spacings';

const MoreScreen = () => {
  const {t, i18n} = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <InformationRow
          infoLabel={t('labels.language')}
          leftControl={
            <ButtonGroup
              buttons={[
                t('labels.viet').toString(),
                t('labels.eng').toString(),
              ]}
              selectedIndex={selectedIndex}
              onPress={value => {
                setSelectedIndex(value);
                i18n.changeLanguage(value === 0 ? 'vi' : 'en');
              }}
              containerStyle={styles.changeLanguageButton}
              selectedButtonStyle={{backgroundColor: colors.ui.secondary}}
            />
          }
        />
      </ScrollView>
    </SafeArea>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {padding: spacing.large},
  changeLanguageButton: {marginVertical: 0, marginHorizontal: 0},
});
