import { useConfig } from "@frontend/config/react";
import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { UseQueryResult } from "@tanstack/react-query";
import { BridgeSource } from "xchain-sdk";
import { useBridgeState } from "../state/use-bridge-state";
import { useGetBridgeWalletTokenBalance } from "./use-get-bridge-wallet-token-balance";

/**
 * Returns the wallet balance for the given BridgeSource. Uses the current bridge to get the XChainBridge.
 * @param source The source of the wallet balance.
 * @param options The options to pass to the query.
 * @returns The wallet balance for the given BridgeSource.
 */
export function useGetSourceWalletBalance<TData = Amount>(
    source: BridgeSource,
    { refetchInterval: refetchIntervalOption, ...restOptions }: UseExternalQueryOptions<Amount, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const balanceRefetchInterval = useConfig("balanceRefetchInterval");
    const refetchInterval = refetchIntervalOption ?? balanceRefetchInterval;

    const bridge = useBridgeState();

    return useGetBridgeWalletTokenBalance<TData>(source, bridge?.xChainBridge, { refetchInterval, ...restOptions });
}
