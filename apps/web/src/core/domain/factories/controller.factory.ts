import { Factory } from "@shared/utils";
import { ISettingsController } from "../interfaces/isettings.controller";
import { SettingsController } from "@frontend/settings/domain/controllers";
import { RepositoryFactory } from "@/core/data-access/factories/repository.factory";

export interface IControllerFactory {
    settingsController: ISettingsController;
}

export const ControllerFactory = Factory<IControllerFactory>({
    settingsController: () => new SettingsController(RepositoryFactory.settingsRepository),
});
