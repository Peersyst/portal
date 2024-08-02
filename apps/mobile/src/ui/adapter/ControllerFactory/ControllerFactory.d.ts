import "@peersyst/domain";

import { ISettingsController } from "../controllers/ISettingsController";

declare module "@peersyst/domain" {
    export interface IControllerFactory {
        settingsController: ISettingsController;
    }

    export interface IStates {}
}
