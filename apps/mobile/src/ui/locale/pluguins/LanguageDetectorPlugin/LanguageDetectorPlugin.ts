/* eslint-disable @typescript-eslint/no-empty-function */
import { Locale } from "common/models";
import * as Localization from "expo-localization";
import { LanguageDetectorAsyncModule } from "i18next";
import ControllerFactory from "ui/adapter/ControllerFactory";

export function getDefaultLocale(): Locale {
    const supportedLocales: Locale[] = ["en", "es"];
    const locale = Localization.getLocales()[0]?.languageCode || Localization?.locale || "en";
    const systemLocaleEnd = locale.slice(-2).toLowerCase();
    const systemLocaleStart = locale.slice(0, 2).toLowerCase();
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
