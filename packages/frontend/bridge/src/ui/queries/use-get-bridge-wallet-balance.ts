import { useConfig } from "@frontend/config/react";
import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { UseQueryResult } from "@tanstack/react-query";
import { BridgeSource } from "xchain-sdk";
import { useGetBridgeWalletTokenBalance } from "./use-get-bridge-wallet-token-balance";

/**
 * Gets the wallet balance for the given BridgeSource. Uses the current bridge to get the XChainBridge.
 * @param source The source of the bridge.
 * @param options The query options.
 * @returns The wallet balance query result.
 */
export function useGetSourceWalletBalance<TData = Amount>(
    source: BridgeSource,
    { refetchInterval: refetchIntervalOption, ...restOptions }: UseExternalQueryOptions<Amount, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const balanceRefetchInterval = useConfig("balanceRefetchInterval");

    const refetchInterval = refetchIntervalOption ?? balanceRefetchInterval;

    return useGetBridgeWalletTokenBalance<TData>(source, undefined, { refetchInterval, ...restOptions });
}
