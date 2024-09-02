import { Service } from "@frontend/core/data-access/service";
import * as Localization from "expo-localization";

@Service()
export class ReactNativeLocalizationService {
    getLocale(): string {
        return Localization.getLocales()[0]?.languageCode || Localization?.locale || "en";
    }
}
