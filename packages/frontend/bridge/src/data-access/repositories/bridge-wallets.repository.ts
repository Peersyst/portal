import { BridgeSource } from "xchain-sdk";
import { PersistedBridgeWallets } from "../../common/types/bridge-wallet.types";
import { IStorage, StorageRepository } from "@frontend/core/data-access/repository";
import { PersistedWallet } from "@frontend/wallet";
import { IBridgeWalletsRepository } from "../../domain/interfaces/i-bridge-wallets.repository";

export class BridgeWalletsRepository extends StorageRepository<PersistedBridgeWallets> implements IBridgeWalletsRepository {
    constructor(storage: IStorage<PersistedBridgeWallets>) {
        super("bridge-wallets", storage);
    }

    /**
     * Get the bridge wallets from the storage.
     * @returns The bridge wallets.
     */
    getBridgeWallets(): Promise<PersistedBridgeWallets | undefined> {
        return this.get();
    }

    /**
     * Set the bridge wallets in the storage.
     * @param wallets The bridge wallets to set.
     */
    async setBridgeWallets(wallets: PersistedBridgeWallets): Promise<void> {
        await this.set(wallets);
    }

    /**
     * Set the origin wallet in the storage.
     * @param wallet The origin wallet to set.
     */
    async setOriginWallet(wallet: PersistedWallet | undefined): Promise<void> {
        const wallets = await this.getBridgeWallets();

        await this.setBridgeWallets({ ...wallets, originWallet: wallet });
    }

    /**
     * Set the destination wallet in the storage.
     * @param wallet The destination wallet to set.
     */
    async setDestinationWallet(wallet: PersistedWallet | undefined): Promise<void> {
        const wallets = await this.getBridgeWallets();

        await this.setBridgeWallets({ ...wallets, destinationWallet: wallet });
    }

    /**
     * Set the wallet source in the storage.
     * @param side The side of the wallet to set.
     * @param wallet The wallet to set.
     */
    async setWalletSource(side: BridgeSource, wallet: PersistedWallet | undefined): Promise<void> {
        if (side === "origin") await this.setOriginWallet(wallet);
        else await this.setDestinationWallet(wallet);
    }
}
