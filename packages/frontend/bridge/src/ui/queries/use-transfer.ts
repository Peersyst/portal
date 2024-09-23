import { UseExternalMutationOptions } from "@frontend/query/react";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { BridgeSource, BridgeTransferResult } from "xchain-sdk";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTransferController } from "../../domain/controllers/bride-transfer/bridge-transfer.controller";
import { getIsDestinationActiveQueryKey } from "./use-is-destination-active";
import { getChainBridgeTokenBalanceQueryKey } from "./use-get-chain-bridge-token-balance";
import { useBridgeChainsState, useBridgeTokenState } from "../state";

/**
 * Transfer mutation.
 * @param options The options for mutation.
 * @returns The mutation result.
 */
export function useTransfer(
    options?: UseExternalMutationOptions<BridgeTransferResult, Error, string>,
): UseMutationResult<BridgeTransferResult, Error, string> {
    const originWallet = useConnectedBridgeSourceWalletState(BridgeSource.ORIGIN);
    const destinationWallet = useConnectedBridgeSourceWalletState(BridgeSource.DESTINATION);
    const { originChain, destinationChain } = useBridgeChainsState();
    const bridgeToken = useBridgeTokenState();

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (amount: string) => getInstance(BridgeTransferController).transfer(amount),
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries(getChainBridgeTokenBalanceQueryKey(originWallet?.address, originChain?.id, bridgeToken?.id)),
                queryClient.invalidateQueries(
                    getChainBridgeTokenBalanceQueryKey(destinationWallet?.address, destinationChain?.id, bridgeToken?.id),
                ),
                queryClient.invalidateQueries(getIsDestinationActiveQueryKey(destinationWallet?.address)),
            ]);
        },
        ...options,
    });
}
