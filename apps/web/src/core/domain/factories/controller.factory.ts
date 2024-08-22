import { ControllerFactory } from "@frontend/core/domain/controller/factory";

import { ISettingsController } from "../interfaces/isettings.controller";
import { SettingsController } from "@frontend/settings/domain/controllers";
import { RepositoryFactory } from "@/core/data-access/factories/repository.factory";
import { StateManager } from "../state/state.manager";

declare module "@frontend/core/domain/controller/factory" {
    export interface IControllerFactory {
        settingsController: ISettingsController;
    }
}

ControllerFactory.create({
    settingsController: () => new SettingsController(RepositoryFactory.settingsRepository, StateManager.states.settings),
});

export { ControllerFactory } from "@frontend/core/domain/controller/factory";
