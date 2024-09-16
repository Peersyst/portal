import { UseExternalQueryOptions } from "@frontend/query/react";
import { Token } from "@frontend/token";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BridgeDirection, BridgeSource, XChainBridge } from "xchain-sdk";
import { useBridgeState } from "../state/use-bridge-state";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTokenController } from "../../domain/controllers/bridge-token/bridge-token.controller";

/**
 * Returns the query key for the bridge source token query.
 * @param source The source of the bridge.
 * @param xChainBridge The xChainBridge of the bridge.
 * @param direction The direction of the bridge.
 * @returns The query key.
 */
export function getSourceBridgeTokenQueryKey(
    source: BridgeSource | undefined,
    xChainBridge: XChainBridge | undefined,
    direction: BridgeDirection | undefined,
): any {
    return ["bridge-source-token", source, JSON.stringify(xChainBridge), direction];
}

/**
 * Gets the bridge token for the given BridgeSource and XChainBridge.
 * @param source The source of the bridge.
 * @param xChainBridge The xChainBridge of the bridge.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetSourceBridgeToken<TData = Token>(
    source: BridgeSource | undefined,
    xChainBridge: XChainBridge | undefined,
    { enabled = true, ...restOptions }: UseExternalQueryOptions<Token, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const bridge = useBridgeState();

    const queryKey = getSourceBridgeTokenQueryKey(source, xChainBridge, bridge?.direction);

    return useQuery<Token, Error, TData, any[]>({
        queryKey,
        queryFn: () => getInstance(BridgeTokenController).getBridgeSourceXChainBridgeToken(source!, xChainBridge!),
        enabled: !!source && !!bridge && !!xChainBridge && enabled,
        ...restOptions,
    });
}
