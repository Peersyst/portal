import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { UseQueryResult } from "@tanstack/react-query";
import { BridgeSource, BridgeToken } from "../../common";
import { useGetChainBridgeTokenBalance } from "./use-get-chain-bridge-token-balance";
import { useBridgeSourceChainState } from "../hooks";

/**
 * Gets the bridge source token balance.
 * @param address The address of the user.
 * @param token The token to get the balance of.
 * @param source The bridge source.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetSourceBridgeTokenBalance<TData = Amount>(
    address: string | undefined,
    token: BridgeToken | undefined,
    source: BridgeSource,
    options: UseExternalQueryOptions<Amount, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const chain = useBridgeSourceChainState(source);

    return useGetChainBridgeTokenBalance(address, chain, token, options);
}
