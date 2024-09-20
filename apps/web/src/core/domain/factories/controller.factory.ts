import { ControllerFactory } from "@frontend/core/domain/controller/factory";

import { SettingsController } from "@frontend/settings/domain/controllers";
import { ISettingsController } from "@frontend/settings/ui/interfaces";
import { StateManager } from "../state/state.manager";
import { RepositoryFactory } from "../../data-access/factories/repository.factory";
import { ServiceFactory } from "../../data-access/factories/service.factory";
import { ApiFactory } from "../../data-access/factories/api.factory";
import {
    IBridgeChainsController,
    IBridgeController,
    IBridgeManagerController,
    IBridgeProvidersController,
    IBridgeTokenController,
    IBridgeTransferController,
    IBridgeWalletsController,
} from "@frontend/bridge/ui/interfaces";
import {
    BridgeChainsController,
    BridgeController,
    BridgeManagerController,
    BridgeProvidersController,
    BridgeTokenController,
    BridgeTransferController,
    BridgeWalletsController,
} from "@frontend/bridge/domain/controllers";
import { IHealthController } from "@frontend/health/ui/interfaces";
import { HealthController } from "@frontend/health/domain/controllers";
import { IChainController } from "@frontend/chain/ui/interfaces";
import { ChainController } from "@frontend/chain/domain/controllers";

declare module "@frontend/core/domain/controller/factory" {
    export interface IControllerFactory {
        settingsController: ISettingsController;
        bridgeChainsController: IBridgeChainsController;
        bridgeProvidersController: IBridgeProvidersController;
        bridgeManagerController: IBridgeManagerController;
        bridgeTokenController: IBridgeTokenController;
        bridgeController: IBridgeController;
        bridgeWalletsController: IBridgeWalletsController;
        bridgeTransferController: IBridgeTransferController;
        healthController: IHealthController;
        chainController: IChainController;
    }
}

ControllerFactory.create({
    settingsController: () =>
        new SettingsController(RepositoryFactory.settingsRepository, ServiceFactory.localizationService, StateManager.states.settings),
    chainController: () => new ChainController(ServiceFactory.axelarService),
    bridgeChainsController: (resolve) =>
        new BridgeChainsController(resolve.chainController, StateManager.states.bridgeChains, RepositoryFactory.bridgeChainsRepository),
    bridgeProvidersController: (resolve) => new BridgeProvidersController(resolve.bridgeChainsController),
    bridgeManagerController: () => new BridgeManagerController(),
    bridgeTokenController: (resolve) =>
        new BridgeTokenController(
            ApiFactory.tokensApi,
            resolve.bridgeChainsController,
            resolve.bridgeManagerController,
            resolve.bridgeProvidersController,
        ),
    bridgeController: (resolve) =>
        new BridgeController(StateManager.states.bridgeState, resolve.bridgeChainsController, resolve.bridgeTokenController),
    bridgeWalletsController: (resolve) =>
        new BridgeWalletsController(
            resolve.bridgeChainsController,
            StateManager.states.bridgeWalletsState,
            RepositoryFactory.bridgeWalletsRepository,
        ),
    bridgeTransferController: (resolve) =>
        new BridgeTransferController(
            resolve.bridgeChainsController,
            resolve.bridgeWalletsController,
            resolve.bridgeManagerController,
            resolve.bridgeController,
        ),
    healthController: () => new HealthController(ApiFactory.healthApi),
});

export { ControllerFactory } from "@frontend/core/domain/controller/factory";
