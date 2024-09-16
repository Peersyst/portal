import { UseExternalQueryOptions } from "@frontend/query/react";
import { Token } from "@frontend/token";
import { UseQueryResult } from "@tanstack/react-query";
import { BridgeSource } from "xchain-sdk";
import { useBridgeState } from "../state/use-bridge-state";
import { useGetSourceBridgeToken } from "./use-get-source-bridge-token";

/**
 * Gets the token for the given BridgeSource. Uses the current bridge to get the XChainBridge.
 * @param source The source of the bridge.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetSourceToken<TData = Token>(
    source: BridgeSource,
    options?: UseExternalQueryOptions<Token, Error, TData, any[]>,
): UseQueryResult<TData> {
    const bridge = useBridgeState();

    return useGetSourceBridgeToken<TData>(source, bridge?.xChainBridge, options);
}
