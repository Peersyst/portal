import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BridgeDirection, BridgeSource, XChainBridge } from "xchain-sdk";

/**
 * Returns the query key for the bridge source token balance query.
 * @param address The address of the user.
 * @param source The source of the bridge.
 * @param xChainBridge The xChainBridge of the bridge.
 * @param bridgeDirection The direction of the bridge.
 * @returns The query key.
 */
export function getSourceBridgeTokenBalanceQueryKey(
    address?: string | undefined,
    source?: BridgeSource,
    xChainBridge?: XChainBridge,
    bridgeDirection?: BridgeDirection,
): any {
    return ["bridge-source-token-balance", address, source, JSON.stringify(xChainBridge), bridgeDirection];
}

/**
 * Gets the bridge source token balance.
 * @param address The address of the user.
 * @param source The source of the bridge.
 * @param xChainBridge The xChainBridge of the bridge.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetSourceBridgeTokenBalance<TData = Amount>(
    address: string | undefined,
    source: BridgeSource,
    xChainBridge: XChainBridge | undefined,
    { enabled = true, ...restOptions }: UseExternalQueryOptions<Amount, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const queryKey = getSourceBridgeTokenBalanceQueryKey(address, source, xChainBridge, undefined);

    return useQuery<Amount, Error, TData, any[]>({
        queryKey,
        queryFn: () => new Amount("0", 18, ""),
        enabled: !!address && !!xChainBridge && enabled,
        ...restOptions,
    });
}
