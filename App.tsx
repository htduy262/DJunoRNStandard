import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

//#region Multi languages setup
const translationGetters = {
  en: {
    translation: {
      ...require('./src/infrastructure/i18n/en.json'),
    },
  },
  vi: {
    translation: {
      ...require('./src/infrastructure/i18n/vi.json'),
    },
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      compatibilityJSON: 'v3',
      resources: translationGetters,
      // backend: {
      //   // for all available options read the backend's repository readme file
      //   // loadPath: '/locales/{{lng}}/{{ns}}.jsonr',
      // },
      lng: 'vi',
      fallbackLng: ['vi'],
      returnObjects: true,
      returnNull: false,
      interpolation: {
        prefix: '%{',
        suffix: '}',
      },
    },
    err => {
      if (err) {
        return console.log('something went wrong loading', err);
      }
    },
  );
//#endregion

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthenticationContextProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthenticationContextProvider>
  );
};

export default App;
