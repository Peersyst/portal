export interface IWalletProviderProvider {
    /**
     * Checks if an account is active
     * @param address The address of the account
     */
    isAccountActive(address: string): Promise<boolean>;

    /**
     * Gets the native balance of an address as a string integer.
     */
    getNativeBalance(address: string): Promise<string>;
}
