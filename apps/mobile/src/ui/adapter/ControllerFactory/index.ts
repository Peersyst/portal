import RepositoryFactory from "@/domain/adapter/RepositoryFactory";
import { ControllerFactory, SettingsController, StateManager } from "@peersyst/domain";

export default ControllerFactory.create({
    settingsController: () => new SettingsController(RepositoryFactory.settingsRepository, StateManager.states.settings),
});
