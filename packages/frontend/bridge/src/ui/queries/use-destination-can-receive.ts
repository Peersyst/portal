import { useConfig } from "@frontend/config/react";
import { BridgeSource, XChainBridgeChain } from "xchain-sdk";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { useBridgeChainsState } from "../state/use-bridge-chains-state";
import { useBridgeState } from "../state/use-bridge-state";
import { ConnectedBridgeWallet } from "../../common";
import { UseExternalQueryOptions } from "@frontend/query/react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTransferController } from "../../domain/controllers/bride-transfer/bridge-transfer.controller";
import { Chain } from "@frontend/chain";

/**
 * Gets the destination can receive query key.
 * @param destinationWallet The destination wallet.
 * @param originChain The origin chain.
 * @param originXChainBridgeChain The origin XChainBridgeChain.
 * @returns The destination can receive query key.
 */
export function getDestinationCanReceiveQueryKey(
    destinationWallet?: ConnectedBridgeWallet,
    originChain?: Chain,
    originXChainBridgeChain?: XChainBridgeChain,
) {
    return ["destination-can-receive", destinationWallet, originChain, originXChainBridgeChain];
}

/**
 * Gets the destination can receive query.
 * @param options The query options.
 * @returns The destination can receive query result.
 */
export function useDestinationCanReceive({
    enabled = true,
    refetchInterval: refetchIntervalOption,
    gcTime = 0,
    staleTime = 0,
    ...restOptions
}: UseExternalQueryOptions<boolean, Error, boolean, any[]> = {}): UseQueryResult<boolean> {
    const destinationCanReceiveRefetchInterval = useConfig("destinationCanReceiveRefetchInterval");
    const refetchInterval = refetchIntervalOption ?? destinationCanReceiveRefetchInterval;

    const destinationWallet = useConnectedBridgeSourceWalletState(BridgeSource.DESTINATION);
    const { originChain } = useBridgeChainsState();
    const { originXChainBridgeChain } = useBridgeState() || {};

    const queryKey = getDestinationCanReceiveQueryKey(destinationWallet, originChain, originXChainBridgeChain);

    return useQuery({
        queryKey,
        queryFn: () => getInstance(BridgeTransferController).destinationCanReceive(),
        enabled: !!destinationWallet && !!originChain && !!originXChainBridgeChain && enabled,
        refetchInterval,
        gcTime,
        staleTime,
        ...restOptions,
    });
}
