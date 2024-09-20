import { ServiceFactory } from "@frontend/core/data-access/service/factory";
import { ILocalizationService } from "@frontend/settings/domain/interfaces";
import { BrowserLocalizationService } from "@frontend/settings/data-access/services/browser";
import { IAxelarService } from "@frontend/axelar/interfaces";
import { AxelarService } from "@frontend/axelar";
import { configManager } from "../../../config";

declare module "@frontend/core/data-access/service/factory" {
    export interface IServiceFactory {
        localizationService: ILocalizationService;
        axelarService: IAxelarService;
    }
}

ServiceFactory.create({
    localizationService: () => new BrowserLocalizationService(),
    axelarService: () => new AxelarService(configManager),
});

export { ServiceFactory } from "@frontend/core/data-access/service/factory";
