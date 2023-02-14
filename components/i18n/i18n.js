import i18n from 'i18next';
import 'intl-pluralrules'
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import pt from './pt.json';
import es from './es.json'
import zh from './zh.json'
import * as Localization from 'expo-localization';
  
i18n.use(initReactI18next).init({
  lng: `${Localization.locale}`,
  fallbackLng: `${Localization.locale}`,
  resources: {
    en: en,
    pt: pt,
    es: es,
    zh: zh
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;