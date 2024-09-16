import { AddWeb3ChainPayload } from "../web3.signer.types";
import { IEvmWalletProviderSigner } from "./i-evm-wallet-provider.signer";

export interface IWeb3Signer extends IEvmWalletProviderSigner {
    /**
     * Adds a listener for the `accountsChanged` event
     * @param handler onAccountsChange handler
     */
    onAccountsChange(handler: (address: string[]) => void): () => void;

    /**
     * Adds a listener for the `chainChanged` event
     * @param handler onChainChange handler
     */
    onChainChange(handler: (chainId: string) => void): () => void;

    /**
     * Returns the signer's current chain
     * // TODO: Check if chain has to be checked or we can do it with 2 separate rpc providers
     */
    getChain(): Promise<number>;

    /**
     * Adds a chain to the web3 signer
     * @param chain The chain to add
     */
    addChain({ chainId, ...restChain }: AddWeb3ChainPayload): Promise<void>;

    /**
     * Switches the web3 signer to the specified chain
     * @param chainId The chainId of the chain to switch to
     */
    switchToChain(chainId: number): Promise<void>;
}
