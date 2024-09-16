import { PersistedBridgeChains } from "../../common/types/bridge-chain.types";

export interface IBridgeChainsRepository {
    getBridgeChains(): Promise<PersistedBridgeChains | undefined>;
    setBridgeChains(chains: PersistedBridgeChains): Promise<void>;
    setOriginChain(chain: string | undefined): Promise<void>;
    setDestinationChain(chain: string | undefined): Promise<void>;
}
