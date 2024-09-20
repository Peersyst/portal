import { useFormatAmount } from "@frontend/misc/ui/amount/react";
import { useCallback } from "react";
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
    const { destinationChain, originChain } = useBridgeChainsState();

    const select = useCallback(
        (isDestinationActive: boolean) =>
            // origin and destination chains must be defined here
            formatAmount(
                // TODO: Get fee
                isDestinationActive
                    ? new Amount("0", destinationChain!.nativeToken.decimals, destinationChain!.nativeToken.symbol)
                    : new Amount("0", originChain!.nativeToken.decimals, originChain!.nativeToken.symbol),
            ),
        [formatAmount, destinationChain, originChain],
    );

    return useIsDestinationActive({ select, ...options });
}
