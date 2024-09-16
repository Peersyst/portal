export interface IXrplFaucetSeedsRepository {
    getSeed(address: string): Promise<string>;
    setSeed(address: string, seed: string): Promise<void>;
    removeSeed(address: string): Promise<void>;
}
