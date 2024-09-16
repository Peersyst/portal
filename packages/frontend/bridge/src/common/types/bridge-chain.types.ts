import { ChainDto } from "@shared/api";

export interface BridgeChainPair {
    originChain: ChainDto;
    destinationChain: ChainDto;
}

export type PersistedBridgeChains = {
    originChain?: string;
    destinationChain?: string;
};
