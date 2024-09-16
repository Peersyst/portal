import { TokenSelectorListItemData } from "../token-selector-list-item.types";
import { BridgeToken } from "@frontend/bridge";

/**
 * Builds a token selector list item from a bridge token.
 * @param bridgeToken The bridge token.
 * @param chainName The chain name.
 * @returns The token selector list item.
 */
export function buildTokenSelectorListItemFromBridgeToken(
    { xChainBridge, imageUrl }: BridgeToken,
    chainName: string,
): TokenSelectorListItemData {
    return {
        label:
            xChainBridge.lockingChain.id === chainName
                ? xChainBridge.lockingChain.issue.currency
                : xChainBridge.issuingChain.issue.currency,
        xChainBridge,
        icon: imageUrl,
    };
}
