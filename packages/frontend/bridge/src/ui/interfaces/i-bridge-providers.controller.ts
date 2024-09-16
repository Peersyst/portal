import { IProvider } from "@frontend/blockchain/providers/interfaces";
import { BridgeSource } from "xchain-sdk";

export interface IBridgeProvidersController {
    getOriginProvider(): IProvider;
    getDestinationProvider(): IProvider;
    getSourceProvider(source: BridgeSource): IProvider;
}
