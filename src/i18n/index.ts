import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { translationsAr } from "./ar";
import { translationsEn } from "./en";
import { translationsFr } from "./fr";


const languageDetector = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: (

  ) => {
    /* use services and options */
  },
  detect: (lng: any) => {

  },
  cacheUserLanguage: (lng: any) => {

  }
  ,
  setLanguage: () => {

    const value = localStorage.getItem("APP_LANG");

    if (value !== "fr" && value !== "en" && value !== "ar") {
      console.log("not equal");
      localStorage.setItem('APP_LANG', 'en');
      return "en";
    }
    else {
      localStorage.setItem('APP_LANG', value);
      return value;
    }

  }
};


const resources = {
  ar: translationsAr.ar,
  en: translationsEn.en,
  fr: translationsFr.fr,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: languageDetector.setLanguage(),
    fallbackLng: 'en', // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;