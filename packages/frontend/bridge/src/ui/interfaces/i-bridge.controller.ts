import Amount from "@shared/amount";
import { Bridge, XChainBridge, XChainBridgeChain } from "xchain-sdk";
import { EventEmitter } from "@frontend/events";

export type BridgeEvents = {
    bridgeChange: (bridge: Bridge | undefined) => void;
};

export interface IBridgeController {
    getBridge(): Bridge | undefined;
    getOriginXChainBridgeChain(): XChainBridgeChain | undefined;
    getDestinationXChainBridgeChain(): XChainBridgeChain | undefined;
    setBridge(xChainBridge: XChainBridge): void;
    swap(): void;
    getCreateBridgeReward(doorAddress: string): Promise<Amount>;
    on: EventEmitter<BridgeEvents>["on"];
}
