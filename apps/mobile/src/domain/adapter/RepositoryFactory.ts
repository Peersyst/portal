import SettingsRepository from "@/data-access/repository/settings/SettingsRepository";
import { Factory } from "@peersyst/common";
import { ISettingsRepository } from "@peersyst/domain";

export interface IRepositoryFactory {
    settingsRepository: ISettingsRepository;
}

export default Factory<IRepositoryFactory>({
    settingsRepository: () => new SettingsRepository(),
});
