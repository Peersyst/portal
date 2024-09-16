import { RepositoryFactory } from "@frontend/core/data-access/repository/factory";

import { SettingsRepository } from "@frontend/settings/data-access/repositories";
import { storageFor } from "@frontend/core/data-access/repository";
import { browserLocalStorage } from "@frontend/core/data-access/repository/browser";
import { Settings } from "@frontend/settings";
import { ISettingsRepository } from "@frontend/settings/domain/interfaces";
import { IBridgeChainsRepository } from "@frontend/bridge/domain/interfaces";
import { IBridgeWalletsRepository } from "@frontend/bridge/domain/interfaces";
import { BridgeChainsRepository } from "@frontend/bridge/data-access/repositories";
import { BridgeWalletsRepository } from "@frontend/bridge/data-access/repositories";
import { PersistedBridgeChains, PersistedBridgeWallets } from "@frontend/bridge";
import { IXrplFaucetSeedsRepository } from "@frontend/wallet/providers/xrp/xrpl/xrpl-faucet/interfaces";
import { XrplFaucetSeedsRepository } from "@frontend/wallet/providers/xrp/xrpl/xrpl-faucet/repositories";

declare module "@frontend/core/data-access/repository/factory" {
    export interface IRepositoryFactory {
        settingsRepository: ISettingsRepository;
        bridgeChainsRepository: IBridgeChainsRepository;
        bridgeWalletsRepository: IBridgeWalletsRepository;
        xrplFaucetSeedsRepository: IXrplFaucetSeedsRepository;
    }
}

RepositoryFactory.create({
    settingsRepository: () => new SettingsRepository(storageFor<Settings>(browserLocalStorage)),
    bridgeChainsRepository: () => new BridgeChainsRepository(storageFor<PersistedBridgeChains>(browserLocalStorage)),
    bridgeWalletsRepository: () => new BridgeWalletsRepository(storageFor<PersistedBridgeWallets>(browserLocalStorage)),
    xrplFaucetSeedsRepository: () => new XrplFaucetSeedsRepository(storageFor<Record<string, string>>(browserLocalStorage)),
});

export { RepositoryFactory } from "@frontend/core/data-access/repository/factory";
