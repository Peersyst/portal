import { WalletProviderError } from "./wallet-provider.error";

/**
 * Checks if an error is a provider error.
 * @param error The error to check.
 * @returns True if the error is a provider error, false otherwise.
 */
export function isWalletProviderError(error: any): error is WalletProviderError {
    return error instanceof Error && error.name === "WalletProviderError";
}
