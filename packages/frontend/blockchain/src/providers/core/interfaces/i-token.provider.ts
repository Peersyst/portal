/**
 * Interface for a token.
 */
export interface ITokenProvider {
    /**
     * Given a token address, returns the decimals of the token.
     * @pre Token address is valid.
     * @param tokenAddress The token address.
     * @returns The number of decimals of the token.
     */
    getTokenDecimals(tokenAddress: string): Promise<number>;

    /**
     * Given a token address, returns the name of the token.
     * @pre Token address is valid
     * @param tokenAddress The token address.
     * @returns The name of the token.
     */
    getTokenName(tokenAddress: string): Promise<string>;

    /**
     * Given a token address, returns the currency of the token.
     * @pre Token address is valid
     * @param tokenAddress The token address.
     * @returns The currency of the token.
     */
    getTokenCurrency(tokenAddress: string): Promise<string>;

    /**
     * Given a token address, returns the balance of the token.
     * @pre Token address is valid
     * @param tokenAddress The token address.
     * @returns The balance of the token.
     */
    getTokenBalance(tokenAddress: string): Promise<string>;
}
