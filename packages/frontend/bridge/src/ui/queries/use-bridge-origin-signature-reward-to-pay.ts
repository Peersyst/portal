import Amount from "@shared/amount";
import { UseQueryResult } from "@tanstack/react-query";
import { useCallback } from "react";
import { BridgeSource } from "xchain-sdk";
import { useBridgeState } from "../state/use-bridge-state";
import { useBridgeSourceChainState } from "../hooks/use-bridge-source-chain-state";
import { UseExternalQueryOptions } from "@frontend/query/react";
import { useIsDestinationActive } from "./use-is-destination-active";

/**
 * Gets the bridge origin signature reward to pay.
 * @param options The query options.
 * @returns The bridge origin signature reward to pay query result.
 */
export function useBridgeOriginSignatureRewardToPay(
    options: Omit<UseExternalQueryOptions<boolean, Error, Amount, any[]>, "select"> = {},
): UseQueryResult<Amount> {
    const { originXChainBridgeChain } = useBridgeState() || {};
    const { nativeDecimals: originDecimals, nativeToken: originNativeToken } = useBridgeSourceChainState(BridgeSource.DESTINATION, true);
    const { signatureReward: originSignatureReward = "0" } = originXChainBridgeChain || {};

    const select = useCallback(
        (isDestinationActive: boolean) => new Amount(isDestinationActive ? "0" : originSignatureReward, originDecimals, originNativeToken),
        [originSignatureReward, originDecimals, originNativeToken],
    );

    return useIsDestinationActive({ select, ...options });
}
