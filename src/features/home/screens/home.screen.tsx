import React, {useState} from 'react';
import SafeArea from '../../../components/SafeArea';
import {ButtonGroup} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import {colors} from '../../../infrastructure/theme/colors';
import {StyleSheet} from 'react-native';

const HomeScreen = () => {
  const {t, i18n} = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeArea>
      <ButtonGroup
        buttons={[t('labels.viet').toString(), t('labels.eng').toString()]}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
          i18n.changeLanguage(value === 0 ? 'vi' : 'en');
        }}
        containerStyle={styles.changeLanguageButton}
        selectedButtonStyle={{backgroundColor: colors.ui.secondary}}
      />
    </SafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  changeLanguageButton: {width: 100},
});
