import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend"; //public/locales/{lang}/translation.json
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "EN",
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
