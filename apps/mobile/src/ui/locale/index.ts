import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetectorPlugin from "./plugins/LanguageDetectorPlugin/LanguageDetectorPlugin";
import { resources } from "@peersyst/locale";

export const i18nextInitializationPromise = i18next
    .use(initReactI18next)
    .use(LanguageDetectorPlugin)
    .init({
        compatibilityJSON: "v3",
        fallbackLng: "en",
        resources,
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        returnNull: false,
    });

export default i18next;
