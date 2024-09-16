import { UseExternalMutationOptions } from "@frontend/query/react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { BridgeSource } from "xchain-sdk";
import { getWalletSourceProvider } from "../utils/get-wallet-source-prodiver";

/**
 * Switch to chain for the given bridge source.
 * @param side The bridge source to switch to chain for.
 * @param options The options for the mutation.
 * @returns The mutation result.
 */
export function useSwitchToChain(
    side: BridgeSource,
    options?: UseExternalMutationOptions<void, unknown, void>,
): UseMutationResult<void, unknown, void> {
    return useMutation({
        mutationFn: async () => {
            const walletProvider = getWalletSourceProvider(side)!;
            if (walletProvider.isMultipleChain()) {
                return await walletProvider.switchToChain();
            } else {
                // eslint-disable-next-line no-console
                console.error(
                    `Tried to switch chain in a non-multiple chain wallet provider: ${walletProvider.providerId} ${walletProvider.address}`,
                );
            }
        },
        ...options,
    });
}
