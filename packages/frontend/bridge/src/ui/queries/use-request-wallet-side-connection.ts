import { getInstance } from "@frontend/core/common/utils/singleton";
import { UseExternalQueryOptions } from "@frontend/query/react";
import { WalletProviderId } from "@frontend/wallet/providers";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BridgeSource } from "xchain-sdk";
import { BridgeWalletsController } from "../../domain/controllers/bridge-wallets/bridge-wallets.controller";

/**
 * Returns the query key for the request wallet side connection query.
 * @param side The side of the bridge.
 * @param providerId The provider id.
 * @returns The query key.
 */
export function getRequestWalletSideConnectionQueryKey(side: BridgeSource, providerId: WalletProviderId): any {
    return ["request-wallet-side-connection", side, providerId];
}

/**
 * Requests a wallet side connection.
 * @param side The side of the bridge.
 * @param providerId The provider id.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useRequestWalletSideConnection<T = any, S = T>(
    side: BridgeSource,
    providerId: WalletProviderId,
    { gcTime = 0, staleTime = 0, ...restOptions }: UseExternalQueryOptions<T, Error, S, any[]> = {},
): UseQueryResult<S, unknown> {
    const queryKey = getRequestWalletSideConnectionQueryKey(side, providerId);

    return useQuery({
        queryKey,
        queryFn: () => {
            return (
                side === "origin"
                    ? getInstance(BridgeWalletsController).requestOriginWalletConnection(providerId)
                    : getInstance(BridgeWalletsController).requestDestinationWalletConnection(providerId)
            ) as T;
        },
        gcTime,
        staleTime,
        ...restOptions,
    });
}
