import { ServiceFactory } from "@frontend/core/data-access/service/factory";
import { ILocalizationService } from "@frontend/settings/domain/interfaces";
import { BrowserLocalizationService } from "@frontend/settings/data-access/services/browser";

declare module "@frontend/core/data-access/service/factory" {
    export interface IServiceFactory {
        localizationService: ILocalizationService;
    }
}

ServiceFactory.create({
    localizationService: () => new BrowserLocalizationService(),
});

export { ServiceFactory } from "@frontend/core/data-access/service/factory";
