import { Factory } from "@shared/utils";
import { ISettingsRepository } from "../interfaces/repository/isettings.repository";
import { SettingsRepository } from "@frontend/settings/data-access/repositories";
import { storageFor } from "@frontend/core/data-access/repository";
import { browserLocalStorage } from "@frontend/core/data-access/repository/browser";
import { Settings } from "@frontend/settings";

export interface IRepositoryFactory {
    settingsRepository: ISettingsRepository;
}

export const RepositoryFactory = Factory<IRepositoryFactory>({
    settingsRepository: () => new SettingsRepository(storageFor<Settings>(browserLocalStorage)),
});
