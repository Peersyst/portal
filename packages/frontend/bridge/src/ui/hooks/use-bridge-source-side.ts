import { BridgeSide, BridgeSource } from "xchain-sdk";
import { useBridgeState } from "../state/use-bridge-state";

/**
 * Gets the bridge side for the given bridge source.
 * @param source The bridge source.
 * @returns The bridge side for the given bridge source.
 */
export function useBridgeSourceSide(source: BridgeSource): BridgeSide | undefined {
    const bridgeState = useBridgeState();

    if (!bridgeState) return undefined;

    const { xChainBridge, originXChainBridgeChain, destinationXChainBridgeChain } = bridgeState;
    const sourceXChainBridgeChain = source === BridgeSource.ORIGIN ? originXChainBridgeChain : destinationXChainBridgeChain;

    if (xChainBridge.lockingChain.doorAddress === sourceXChainBridgeChain.doorAddress) return BridgeSide.LOCKING;
    else if (xChainBridge.issuingChain.doorAddress === sourceXChainBridgeChain.doorAddress) return BridgeSide.ISSUING;
    else return undefined;
}
