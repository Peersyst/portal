import { ITokenProvider } from "../interfaces/i-token.provider";

/**
 * Checks if the given provider is a token provider.
 * @param provider The provider to check.
 * @returns Whether the provider is a token provider.
 */
export function isTokenProvider(provider: any): provider is ITokenProvider {
    return "getTokenBalance" in provider && "getTokenDecimals" in provider && "getTokenName" in provider && "getTokenCurrency" in provider;
}
