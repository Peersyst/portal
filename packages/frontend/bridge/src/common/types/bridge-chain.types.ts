import { Chain } from "@frontend/chain";

export interface BridgeChainPair {
    originChain: Chain;
    destinationChain: Chain;
}

export type PersistedBridgeChains = {
    originChain?: string;
    destinationChain?: string;
};
