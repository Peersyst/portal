import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetectorPlugin from "./plugins/LanguageDetectorPlugin";
import { resources } from "@frontend/locale/resources";

export const i18nextInitializationPromise = i18next
    .use(initReactI18next)
    .use(LanguageDetectorPlugin)
    .init({
        fallbackLng: "en",
        resources,
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        returnNull: false,
    });

export default i18next;
