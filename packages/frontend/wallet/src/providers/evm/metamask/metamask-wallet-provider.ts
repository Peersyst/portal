import { ChainType } from "xchain-sdk";
import { EvmWalletProvider } from "../evm-wallet-provider";
import { IEthersProvider } from "@frontend/blockchain/providers/evm/ethers/interfaces";
import { IWeb3Signer } from "@frontend/blockchain/signers/evm/ethers/web3/interfaces";
import { MetamaskWalletProviderErrors } from "./metamask-wallet-provider.errors";
import { IMultipleChainWalletProvider } from "../../core/interfaces/i-wallet-provider";
import { EthersProvider } from "@frontend/blockchain/providers/evm/ethers";
import { ethers, providers } from "ethers";
import { WalletProviderError } from "../../core/error";
import { Web3Signer } from "@frontend/blockchain/signers/evm/ethers/web3";

export class MetamaskWalletProvider
    extends EvmWalletProvider<IEthersProvider, IWeb3Signer, MetamaskWalletProviderErrors, void>
    implements IMultipleChainWalletProvider
{
    constructor() {
        super("metamask", ChainType.EVM);
    }

    protected errorHandlers: Partial<Record<string | "default", MetamaskWalletProviderErrors | (() => void)>> = {
        WEB3_REQUEST_REJECTED: MetamaskWalletProviderErrors.METAMASK_REQUEST_REJECTED,
    };

    /**
     * Checks if chain is valid.
     * @param chainId The chain id to check.
     * @returns True if the chain is valid, false otherwise.
     */
    private isChainValid(chainId: number): boolean {
        return chainId === this.chain.chainId;
    }

    /**
     * Gets the ethers web3 provider.
     * @returns The ethers web3 provider.
     */
    private getEthersWeb3Provider(): ethers.providers.Web3Provider {
        if ((window as any).ethereum) {
            return new ethers.providers.Web3Provider((window as any).ethereum, "any");
        } else {
            throw new WalletProviderError(MetamaskWalletProviderErrors.METAMASK_NOT_INSTALLED);
        }
    }

    /**
     * Handles the validity of the given chain.
     * @param chainId The chain id to handle.
     * TODO: Delete on double metamask refactor
     */
    private handleChainValidity(chainId: number): void {
        if (!this.isChainValid(chainId)) this.handleInvalidChain();
        else this.handleValidChain();
    }

    /**
     * @inheritdoc
     */
    protected getProvider(): Promise<IEthersProvider> {
        return Promise.resolve(new EthersProvider(new providers.JsonRpcProvider(this.chain.rpcUrl)));
    }

    /**
     * @inheritdoc
     */
    protected async getSigner(): Promise<IWeb3Signer> {
        try {
            const ethersWeb3Provider = this.getEthersWeb3Provider();
            await ethersWeb3Provider.send("eth_requestAccounts", []);
            const ethersWeb3Signer = ethersWeb3Provider.getSigner();
            return new Web3Signer(ethersWeb3Signer, this.provider);
        } catch (e) {
            return this.handleError(e, {
                default: MetamaskWalletProviderErrors.METAMASK_REQUEST_REJECTED,
            });
        }
    }

    /**
     * @inheritdoc
     */
    protected recoverSigner(): Promise<IWeb3Signer | undefined> {
        // Address is not taken into account since it is not needed for the recovery.
        // The first available address will be used.
        try {
            const ethersWeb3Provider = this.getEthersWeb3Provider();
            const ethersWeb3Signer = ethersWeb3Provider.getSigner();
            return Promise.resolve(new Web3Signer(ethersWeb3Signer, this.provider));
        } catch (_e) {
            return Promise.resolve(undefined);
        }
    }

    /**
     * @inheritdoc
     */
    protected async afterConnect(): Promise<void> {
        const chainId = await this.signer.getChain();

        if (!this.isChainValid(chainId)) this.handleInvalidChain();

        const removeOnAccountsChange = this.signer.onAccountsChange((accounts) => {
            if (accounts.length === 0) {
                this.disconnect();
            } else if (this.address?.toLowerCase() !== accounts[0].toLowerCase()) {
                this.connect(accounts[0]);
            }
        });
        // TODO: Delete on double metamask refactor
        const removeOnChainChange = this.signer.onChainChange((chainId) =>
            this.handleChainValidity(parseInt(chainId.replace("0x", ""), 16)),
        );
        // TODO: Delete on double metamask refactor
        const removeOnSetChain = this.on("setChain", async (chain) => {
            if (chain && chain.chainId) {
                const connectedChainId = await this.signer.getChain();
                this.handleChainValidity(connectedChainId);
            }
        });
        const removeOnDisconnect = this.on("disconnect", () => {
            removeOnAccountsChange();
            removeOnChainChange();
            removeOnSetChain();
            removeOnDisconnect();
        });
    }

    /**
     * @inheritdoc
     */
    async addChain(): Promise<void> {
        try {
            await this.signer.addChain({
                chainId: this.chain.chainId!,
                chainName: this.chain.name,
                rpcUrls: [this.chain.rpcUrl],
                blockExplorerUrls: [this.chain.explorerUrl],
                nativeCurrency: {
                    symbol: this.chain.nativeToken,
                    decimals: this.chain.nativeDecimals,
                },
            });
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async switchToChain(): Promise<void> {
        try {
            await this.signer.switchToChain(this.chain.chainId!);
        } catch (e) {
            let chainNotFound = false;

            this.handleError(e, {
                WEB3_CHAIN_NOT_FOUND: () => {
                    chainNotFound = true;
                },
                default: MetamaskWalletProviderErrors.COULD_NOT_SWITCH_METAMASK_CHAIN,
            });

            // Has to be done this way to perform the await
            if (chainNotFound) await this.addChain();
        }
    }
}
