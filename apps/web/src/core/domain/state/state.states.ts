import { StateManager } from "@frontend/core/domain/state/manager";
import { ISettingsState, settingsState } from "@frontend/settings/domain/state";
import {
    bridgeChainsState,
    bridgeTokenState,
    bridgeWalletsState,
    IBridgeChainsState,
    IBridgeTokenState,
    IBridgeWalletsState,
} from "@frontend/bridge/domain/states";

declare module "@frontend/core/domain/state/manager" {
    export interface IStates {
        settings: ISettingsState;
        bridgeChains: IBridgeChainsState;
        bridgeWalletsState: IBridgeWalletsState;
        bridgeToken: IBridgeTokenState;
    }
}

// Create states
StateManager.createStates({
    settings: settingsState,
    bridgeChains: bridgeChainsState,
    bridgeWalletsState: bridgeWalletsState,
    bridgeToken: bridgeTokenState,
});
