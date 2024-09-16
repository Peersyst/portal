import { BridgeDoorProvider as IBridgeDoorProvider, ChainType, XChainBridgeChainFormat, XChainBridgeFormat } from "xchain-sdk";
import { Token } from "@frontend/token";

/**
 * Interface for providers.
 * Includes methods that are common to all providers and will be used in the domain layer (by a controller).
 * Other provider interfaces are meant to be used in a specific context (e.g. wallet provider, bridge door, etc.).
 */
export interface IProvider extends IBridgeDoorProvider {
    /**
     * Gets the token of the specified xChainBridge.
     * @param xChainBridgeChain The XChainBridgeChain of the token in the corresponding ChainType format.
     * @param xChainBridge The XChainBridge of the token in the corresponding ChainType format.
     */
    getXChainBridgeToken(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType>,
        xChainBridge: XChainBridgeFormat<ChainType>,
    ): Promise<Token>;

    /**
     * Gets the balance of the specified xChainBridge.
     * @param address The address of the account.
     * @param xChainBridgeChain The XChainBridgeChain of the token in the corresponding ChainType format.
     * @param xChainBridge The XChainBridge of the token in the corresponding ChainType format.
     */
    getXChainBridgeTokenBalance(
        address: string,
        xChainBridgeChain: XChainBridgeChainFormat<ChainType>,
        xChainBridge: XChainBridgeFormat<ChainType>,
    ): Promise<string>;

    /**
     * Gets the decimals of the specified xChainBridge.
     * @param xChainBridgeChain The XChainBridgeChain of the token in the corresponding ChainType format.
     * @param xChainBridge The XChainBridge of the token in the corresponding ChainType format.
     */
    getXChainBridgeTokenDecimals(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType>,
        xChainBridge: XChainBridgeFormat<ChainType>,
    ): Promise<number>;

    /**
     * Gets the name of the specified xChainBridge.
     * @param xChainBridgeChain The XChainBridgeChain of the token in the corresponding ChainType format.
     * @param xChainBridge The XChainBridge of the token in the corresponding ChainType format.
     */
    getXChainBridgeTokenName(
        xChainBridgeChain: XChainBridgeChainFormat<ChainType>,
        xChainBridge: XChainBridgeFormat<ChainType>,
    ): Promise<string>;

    /**
     * Given a token address, returns whether it is valid or not.
     * @param address The token address.
     * @returns A promise that resolves to a boolean indicating whether the token is valid or not.
     */
    isTokenAddressValid(address: string): Promise<boolean>;
}
