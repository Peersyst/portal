import { StateManager } from "@frontend/core/domain/state/manager";
import { ISettingsState, settingsState } from "@frontend/settings/domain/state";
import {
    bridgeChainsState,
    bridgeState,
    bridgeWalletsState,
    IBridgeChainsState,
    IBridgeState,
    IBridgeWalletsState,
} from "@frontend/bridge/domain/states";

declare module "@frontend/core/domain/state/manager" {
    export interface IStates {
        settings: ISettingsState;
        bridgeChains: IBridgeChainsState;
        bridgeState: IBridgeState;
        bridgeWalletsState: IBridgeWalletsState;
    }
}

// Create states
StateManager.createStates({
    settings: settingsState,
    bridgeChains: bridgeChainsState,
    bridgeState: bridgeState,
    bridgeWalletsState: bridgeWalletsState,
});
