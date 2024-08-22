import { ControllerFactory } from "@frontend/core/domain/controller/factory";

import { SettingsController } from "@frontend/settings/domain/controllers";
import { ISettingsController } from "@frontend/settings/ui/interfaces";
import { StateManager } from "../state/state.manager";
import { RepositoryFactory } from "../../data-access/factories/repository.factory";
import { ServiceFactory } from "../../data-access/factories/service.factory";

declare module "@frontend/core/domain/controller/factory" {
    export interface IControllerFactory {
        settingsController: ISettingsController;
    }
}

ControllerFactory.create({
    settingsController: () =>
        new SettingsController(RepositoryFactory.settingsRepository, ServiceFactory.localizationService, StateManager.states.settings),
});

export { ControllerFactory } from "@frontend/core/domain/controller/factory";
