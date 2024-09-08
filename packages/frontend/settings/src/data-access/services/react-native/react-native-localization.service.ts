import { Service } from "@frontend/core/data-access/service";
import * as Localization from "expo-localization";

@Service()
export class ReactNativeLocalizationService {
    /**
     * Gets the locale.
     * @returns The locale or "en" if the locale is not defined.
     */
    getLocale(): string {
        return Localization.getLocales()[0]?.languageCode || Localization?.locale || "en";
    }
}
