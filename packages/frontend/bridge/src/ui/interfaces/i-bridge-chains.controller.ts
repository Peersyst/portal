import { BridgeSource } from "xchain-sdk";
import { IBridgeChainsState } from "../../domain/states/bridge-chains.state";
import { EventEmitter } from "@frontend/events";
import { Chain } from "@frontend/chain";

export type BridgeChainsEvents = {
    bridgeChainsChange: (chains: IBridgeChainsState, prevChains: IBridgeChainsState) => void;
    bridgeChainsLoad: (chains: IBridgeChainsState) => void;
    bridgeChainsSwap: (chains: IBridgeChainsState) => void;
};

export interface IBridgeChainsController {
    getOriginChain(): Chain;
    setOriginChain(chain: Chain): void;
    getDestinationChain(): Chain;
    setDestinationChain(chain: Chain): void;
    getBridgeChains(): NonNullable<Required<IBridgeChainsState>>;
    getSourceChain(source: BridgeSource): Chain;
    swap(): void;
    on: EventEmitter<BridgeChainsEvents>["on"];
}
