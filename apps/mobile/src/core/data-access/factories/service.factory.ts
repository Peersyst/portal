import { ServiceFactory } from "@frontend/core/data-access/service/factory";
import { ILocalizationService } from "@frontend/settings/domain/interfaces";
import { ReactNativeLocalizationService } from "@frontend/settings/data-access/services/react-native";

declare module "@frontend/core/data-access/service/factory" {
    export interface IServiceFactory {
        localizationService: ILocalizationService;
    }
}

ServiceFactory.create({
    localizationService: () => new ReactNativeLocalizationService(),
});

export { ServiceFactory } from "@frontend/core/data-access/service/factory";
