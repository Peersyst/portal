import { useFormatAmount } from "@frontend/misc/ui/amount/react";
import { useCallback } from "react";
import { useBridgeState } from "../state/use-bridge-state";
import { useBridgeChainsState } from "../state/use-bridge-chains-state";
import Amount from "@shared/amount";
import { useIsDestinationActive } from "./use-is-destination-active";
import { UseQueryResult } from "@tanstack/react-query";
import { UseExternalQueryOptions } from "@frontend/query/react";

/**
 * Gets the transfer fee for the bridge.
 * @param options Options for the query.
 * @returns The transfer fee query result.
 */
export function useBridgeTransferFee(
    options: Omit<UseExternalQueryOptions<boolean, Error, string, any[]>, "select"> = {},
): UseQueryResult<string> {
    const formatAmount = useFormatAmount();
    const { destinationXChainBridgeChain, originXChainBridgeChain } = useBridgeState() || {};
    const { destinationChain, originChain } = useBridgeChainsState();
    const { signatureReward: destinationSignatureReward = "0" } = destinationXChainBridgeChain || {};
    const { signatureReward: originSignatureReward = "0" } = originXChainBridgeChain || {};

    const select = useCallback(
        (isDestinationActive: boolean) =>
            // origin and destination chains must be defined here
            formatAmount(
                isDestinationActive
                    ? new Amount(destinationSignatureReward, destinationChain!.nativeToken.decimals, destinationChain!.nativeToken.symbol)
                    : new Amount(originSignatureReward, originChain!.nativeToken.decimals, originChain!.nativeToken.symbol),
            ),
        [formatAmount, destinationChain, originChain, destinationSignatureReward, originSignatureReward],
    );

    return useIsDestinationActive({ select, ...options });
}
