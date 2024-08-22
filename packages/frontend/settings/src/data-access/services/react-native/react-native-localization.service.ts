import * as Localization from "expo-localization";

export class ReactNativeLocalizationService {
    getLocale(): string {
        return Localization.getLocales()[0]?.languageCode || Localization?.locale || "en";
    }
}
