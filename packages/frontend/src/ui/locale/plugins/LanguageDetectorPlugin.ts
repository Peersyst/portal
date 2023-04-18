/* eslint-disable @typescript-eslint/no-empty-function */
import { Locale } from "common/models";
import { LanguageDetectorAsyncModule } from "i18next";
import ControllerFactory from "ui/adapter/ControllerFactory";
import getBrowserLocale from "../utils/getBrowserLocale";

export function getDefaultLocale(): Locale {
    const supportedLocales: Locale[] = ["en", "es"];
    const defaultLocale = getBrowserLocale();
    const systemLocaleEnd = defaultLocale.slice(-2).toLowerCase();
    const systemLocaleStart = defaultLocale.slice(0, 2).toLowerCase();
    return supportedLocales.find((l) => systemLocaleStart === l || systemLocaleEnd === l) ?? "en";
}

export async function detect(): Promise<Locale> {
    try {
        const storedLocale = await ControllerFactory.settingsController.getLocale();
        return storedLocale || getDefaultLocale();
    } catch (error) {
        /* eslint-disable no-console */
        console.warn("Error reading language", error);
        return "en";
    }
}

const LanguageDetectorPlugin: LanguageDetectorAsyncModule = {
    type: "languageDetector",
    async: true,
    init: () => {},
    detect,
    cacheUserLanguage: () => {},
};

export default LanguageDetectorPlugin;
