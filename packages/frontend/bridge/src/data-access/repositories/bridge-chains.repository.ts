import { IStorage, StorageRepository, Repository } from "@frontend/core/data-access/repository";
import { PersistedBridgeChains } from "../../common/types/bridge-chain.types";
import { IBridgeChainsRepository } from "../../domain/interfaces/i-bridge-chains.repository";

@Repository()
export class BridgeChainsRepository extends StorageRepository<PersistedBridgeChains> implements IBridgeChainsRepository {
    constructor(storage: IStorage<PersistedBridgeChains>) {
        super("bridge-chains", storage);
    }

    /**
     * Get the bridge chains from the storage.
     * @returns The bridge chains.
     */
    getBridgeChains(): Promise<PersistedBridgeChains | undefined> {
        return this.get();
    }

    /**
     * Set the bridge chains in the storage.
     * @param chains The bridge chains to set.
     */
    async setBridgeChains(chains: PersistedBridgeChains): Promise<void> {
        await this.set(chains);
    }

    /**
     * Set the origin chain in the storage.
     * @param chain The origin chain to set.
     */
    async setOriginChain(chain: string | undefined): Promise<void> {
        const chains = await this.getBridgeChains();

        await this.setBridgeChains({ ...chains, originChain: chain });
    }

    /**
     * Set the destination chain in the storage.
     * @param chain The destination chain to set.
     */
    async setDestinationChain(chain: string | undefined): Promise<void> {
        const chains = await this.getBridgeChains();

        await this.setBridgeChains({ ...chains, destinationChain: chain });
    }
}
