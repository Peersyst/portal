import { ChainDto } from "@shared/api";
import { BridgeSource } from "xchain-sdk";
import { IBridgeChainsState } from "../../domain/states/bridge-chains.state";
import { EventEmitter } from "@frontend/events";

export type BridgeChainsEvents = {
    bridgeChainsChange: (chains: IBridgeChainsState, prevChains: IBridgeChainsState) => void;
    bridgeChainsLoad: (chains: IBridgeChainsState) => void;
    bridgeChainsSwap: (chains: IBridgeChainsState) => void;
};

export interface IBridgeChainsController {
    getChains(): Promise<ChainDto[]>;
    getOriginChain(): ChainDto;
    setOriginChain(chain: ChainDto): void;
    getDestinationChain(): ChainDto;
    setDestinationChain(chain: ChainDto): void;
    getBridgeChains(): NonNullable<Required<IBridgeChainsState>>;
    getSourceChain(source: BridgeSource): ChainDto;
    swap(): void;
    on: EventEmitter<BridgeChainsEvents>["on"];
}
