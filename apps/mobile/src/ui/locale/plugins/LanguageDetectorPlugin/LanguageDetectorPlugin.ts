import { Locale } from "@peersyst/common";
import { LanguageDetectorAsyncModule } from "i18next";
// import ControllerFactory from "@/ui/adapter/ControllerFactory";

export async function detect(): Promise<Locale> {
    try {
        // return await ControllerFactory.settingsController.getLocale();
        return "en";
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
