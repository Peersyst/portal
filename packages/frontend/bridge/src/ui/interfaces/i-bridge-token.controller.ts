import { XChainBridge, BridgeSource } from "xchain-sdk";
import { BridgeToken } from "../../common/types/bridge-token.types";
import { Token } from "@frontend/token";
import Amount from "@shared/amount";
import { EventEmitter } from "@frontend/events";

export type BridgeTokenEvents = {
    bridgeVerifiedTokensLoad: (tokens: BridgeToken[]) => void;
};

export interface IBridgeTokenController {
    getVerifiedTokens(): Promise<BridgeToken[]>;
    getBridgeSourceXChainBridgeToken(source: BridgeSource, xChainBridge: XChainBridge): Promise<Token>;
    getBridgeSourceToken(source: BridgeSource, tokenAddress: string): Promise<Token>;
    getBridgeSourceXChainBridgeTokenBalance(address: string, source: BridgeSource, xChainBridge: XChainBridge): Promise<Amount>;
    getBridgeSourceTokenBalance(source: BridgeSource, tokenAddress: string): Promise<Amount>;
    getBridgeSourceXChainBridgeTokenName(source: BridgeSource, xChainBridge: XChainBridge): Promise<string>;
    getBridgeSourceTokenName(source: BridgeSource, tokenAddress: string): Promise<string>;
    on: EventEmitter<BridgeTokenEvents>["on"];
}
