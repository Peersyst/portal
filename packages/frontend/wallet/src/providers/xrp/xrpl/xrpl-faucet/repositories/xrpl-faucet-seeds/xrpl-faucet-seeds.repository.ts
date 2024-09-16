import { IStorage, Repository, StorageKeyValueRepository } from "@frontend/core/data-access/repository";
import { RepositoryError } from "@frontend/core/data-access/repository/error";
import { XrplFaucetSeedsRepositoryErrorCodes } from "./xrpl-faucet-seeds.repository.errors";
import { IXrplFaucetSeedsRepository } from "../../interfaces/i-xrpl-faucet-seeds.repository";

@Repository()
export class XrplFaucetSeedsRepository extends StorageKeyValueRepository<Record<string, string>> implements IXrplFaucetSeedsRepository {
    constructor(storage: IStorage<Record<string, string>>) {
        super("xrp-faucet-seed", storage);
    }

    /**
     * Get the seed for the given address.
     * @param address The address to get the seed for.
     * @returns The seed for the given address.
     */
    async getSeed(address: string): Promise<string> {
        const seed = await this.get(address);

        if (!seed) throw new RepositoryError(XrplFaucetSeedsRepositoryErrorCodes.XRP_FAUCET_SEED_NOT_FOUND);

        return seed;
    }

    /**
     * Set the seed for the given address.
     * @param address The address to set the seed for.
     * @param seed The seed to set for the given address.
     * @returns A promise that resolves when the seed is set.
     */
    async setSeed(address: string, seed: string): Promise<void> {
        return this.set(address, seed);
    }

    /**
     * Remove the seed for the given address.
     * @param address The address to remove the seed for.
     * @returns A promise that resolves when the seed is removed.
     */
    async removeSeed(address: string): Promise<void> {
        return this.clear(address);
    }
}
