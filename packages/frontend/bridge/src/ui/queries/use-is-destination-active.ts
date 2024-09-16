import { useConfig } from "@frontend/config/react";
import { BridgeSource } from "xchain-sdk";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { UseExternalQueryOptions } from "@frontend/query/react";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeWalletsController } from "../../domain/controllers/bridge-wallets/bridge-wallets.controller";

/**
 * Gets the query key for the destination active status.
 * @param address The address to get the destination active status for.
 * @returns The query key.
 */
export function getIsDestinationActiveQueryKey(address?: string): any {
    return ["is-destination-active", address];
}

/**
 * Gets the destination active status.
 * @param options The query options.
 * @returns The destination active status query result.
 */
export function useIsDestinationActive<T = boolean>({
    enabled = true,
    refetchInterval: refetchIntervalOption,
    gcTime = 0,
    staleTime = 0,
    ...restOptions
}: UseExternalQueryOptions<boolean, Error, T, any[]> = {}): UseQueryResult<T> {
    const destinationIsActiveRefetchInterval = useConfig("destinationIsActiveRefetchInterval");
    const refetchInterval = refetchIntervalOption ?? destinationIsActiveRefetchInterval;

    const destinationWallet = useConnectedBridgeSourceWalletState(BridgeSource.DESTINATION);

    const queryKey = getIsDestinationActiveQueryKey(destinationWallet?.address);

    return useQuery<boolean, Error, T, any[]>({
        queryKey,
        queryFn: () => getInstance(BridgeWalletsController).destinationWalletProvider!.isActive(),
        enabled: !!destinationWallet && enabled,
        refetchInterval,
        gcTime,
        staleTime,
        ...restOptions,
    });
}
