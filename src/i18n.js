import i18n from 'i18next';
import 'intl-pluralrules';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import eng from './translations/en.json';
import uzb from './translations/uz.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: eng,
    },
    uz: {
      translation: uzb,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;
