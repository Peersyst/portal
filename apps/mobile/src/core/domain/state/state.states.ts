import { StateManager } from "@frontend/core/domain/state/manager";
import { ISettingsState, settingsState } from "@frontend/settings/domain/state";

declare module "@frontend/core/domain/state/manager" {
    export interface IStates {
        settings: ISettingsState;
    }
}

// Create states
StateManager.createStates({
    settings: settingsState,
});
