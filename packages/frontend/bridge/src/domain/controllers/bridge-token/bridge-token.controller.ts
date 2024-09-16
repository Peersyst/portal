import { XChainBridge, BridgeSource, ChainType, XChainBridgeChainFormat, XChainBridgeFormat } from "xchain-sdk";
import { IBridgeTokenController } from "../../../ui/interfaces/i-bridge-token.controller";
import { BridgeToken } from "../../../common/types/bridge-token.types";
import { ITokensApi } from "../../interfaces/i-tokens.api";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { IBridgeManagerController } from "../../../ui/interfaces/i-bridge-manager.controller";
import { IBridgeProvidersController } from "../../../ui/interfaces/i-bridge-providers.controller";
import { FilterXChainBridgeTokensOptions } from "./bridge-token.controller.types";
import { Token, TokenLike } from "@frontend/token";
import { ChainDto } from "@shared/api";
import { BridgeTokenErrors } from "../../errors/bridge-token.errors";
import { DomainError } from "@frontend/core/domain/error";
import { isTokenProvider } from "@frontend/blockchain/providers";
import { BridgeTokenEventEmitter } from "../../events/bridge-token.events";
import Amount from "@shared/amount";

export class BridgeTokenController implements IBridgeTokenController {
    /**
     * Reference to the domain event emitter.
     */
    private readonly eventEmitter = new BridgeTokenEventEmitter();

    constructor(
        private readonly tokensApi: ITokensApi,
        private readonly bridgeChainsController: IBridgeChainsController,
        private readonly bridgeManagerController: IBridgeManagerController,
        private readonly bridgeProvidersController: IBridgeProvidersController,
    ) {}

    /**
     * Initializes the controller.
     */
    onInit(): void {
        this.bridgeManagerController.on("bridgeManagerLoad", async () => {
            const verifiedTokens = await this.getVerifiedTokens();
            this.eventEmitter.emit("bridgeVerifiedTokensLoad", verifiedTokens);
        });
    }

    /**
     * Filters `xChainBridges` by `tokens`.
     * @param xChainBridges Array of XChainBridges.
     * @param tokens Array of tokens.
     * @param options Options.
     * @returns Filtered XChainBridges.
     */
    private filterXChainBridgeTokens(
        xChainBridges: XChainBridge[],
        tokens: TokenLike[],
        { areTokensVerified }: FilterXChainBridgeTokensOptions,
    ): BridgeToken[] {
        if (!tokens.length) return [];

        const filteredXChainBridgeTokens: BridgeToken[] = [];

        for (const xChainBridge of xChainBridges) {
            if (tokens.length === 0) break;

            const verifiedTokenIndex = tokens.findIndex(
                (token) =>
                    (token.issuer == xChainBridge.lockingChain.issue.issuer?.address &&
                        token.currency == xChainBridge.lockingChain.issue.currency) ||
                    (token.issuer == xChainBridge.issuingChain.issue.issuer?.address &&
                        token.currency == xChainBridge.issuingChain.issue.currency),
            );

            if (verifiedTokenIndex !== -1) {
                filteredXChainBridgeTokens.push(
                    new BridgeToken({ xChainBridge, imageUrl: tokens[verifiedTokenIndex]?.imageUrl, isVerified: areTokensVerified }),
                );
                tokens?.splice(verifiedTokenIndex, 1);
            }
        }

        return filteredXChainBridgeTokens;
    }

    /**
     * Gets the XChainBridgeChain corresponding to the given chain.
     * @param chain The chain.
     * @param xChainBridge The XChainBridge.
     * @returns The XChainBridgeChain.
     */
    private getChainXChainBridgeChain(chain: ChainDto, xChainBridge: XChainBridge): XChainBridgeChainFormat<ChainType> {
        if (xChainBridge.lockingChain.id !== undefined && xChainBridge.lockingChain.id === chain.name) {
            return xChainBridge.lockingChain.for(chain.type as ChainType);
        } else if (xChainBridge.issuingChain.id !== undefined && xChainBridge.issuingChain.id === chain.name) {
            return xChainBridge.issuingChain.for(chain.type as ChainType);
        } else {
            throw new DomainError(BridgeTokenErrors.X_CHAIN_BRIDGE_DOES_NOT_CORRESPOND_TO_CHAIN);
        }
    }

    /**
     * Gets the XChainBridge corresponding to the given chain.
     * @param chain The chain.
     * @param xChainBridge The XChainBridge.
     * @returns The XChainBridge.
     */
    private getChainXChainBridge(chain: ChainDto, xChainBridge: XChainBridge): XChainBridgeFormat<ChainType> {
        return xChainBridge.for(chain.type as ChainType);
    }

    /**
     * Get verified tokens.
     * @returns Verified tokens.
     */
    async getVerifiedTokens(): Promise<BridgeToken[]> {
        const { originChain, destinationChain } = this.bridgeChainsController.getBridgeChains();
        const bridgeManager = this.bridgeManagerController.getBridgeManager();

        const [xChainBridges, verifiedTokens] = await Promise.all([
            bridgeManager.getXChainBridges(),
            this.tokensApi.findVerifiedTokens([originChain.name, destinationChain.name]),
        ]);

        return this.filterXChainBridgeTokens(xChainBridges, verifiedTokens, { areTokensVerified: true });
    }

    /**
     * Gets the token corresponding to the given source and XChainBridge.
     * @param source The bridge source.
     * @param xChainBridge The XChainBridge.
     * @returns The token.
     */
    async getBridgeSourceXChainBridgeToken(source: BridgeSource, xChainBridge: XChainBridge): Promise<Token> {
        const chain = this.bridgeChainsController.getSourceChain(source);
        const provider = this.bridgeProvidersController.getSourceProvider(source);
        const xChainBridgeChainForChainType = this.getChainXChainBridgeChain(chain, xChainBridge);
        const xChainBridgeForChainType = this.getChainXChainBridge(chain, xChainBridge);

        return await provider.getXChainBridgeToken(xChainBridgeChainForChainType, xChainBridgeForChainType);
    }

    /**
     * Gets the token corresponding to the given source and token address.
     * @param source The bridge source.
     * @param tokenAddress The token address.
     * @pre `tokenAddress` is the issuer.
     * @returns The token.
     */
    async getBridgeSourceToken(source: BridgeSource, tokenAddress: string): Promise<Token> {
        const provider = this.bridgeProvidersController.getSourceProvider(source);

        if (!isTokenProvider(provider)) throw new DomainError(BridgeTokenErrors.NOT_TOKEN_PROVIDER);

        const [decimals, currency] = await Promise.all([provider.getTokenDecimals(tokenAddress), provider.getTokenCurrency(tokenAddress)]);

        return {
            decimals,
            issuer: tokenAddress,
            currency,
        };
    }

    /**
     * Gets the token balance corresponding to the given address, source and XChainBridge.
     * @param address The address.
     * @param source The bridge source.
     * @param xChainBridge The XChainBridge.
     * @returns The token balance.
     */
    async getBridgeSourceXChainBridgeTokenBalance(address: string, source: BridgeSource, xChainBridge: XChainBridge): Promise<Amount> {
        const chain = this.bridgeChainsController.getSourceChain(source);
        const provider = this.bridgeProvidersController.getSourceProvider(source);
        const xChainBridgeChainForChainType = this.getChainXChainBridgeChain(chain, xChainBridge);
        const xChainBridgeForChainType = this.getChainXChainBridge(chain, xChainBridge);

        const [token, balance] = await Promise.all([
            provider.getXChainBridgeToken(xChainBridgeChainForChainType, xChainBridgeForChainType),
            provider.getXChainBridgeTokenBalance(address, xChainBridgeChainForChainType, xChainBridgeForChainType),
        ]);

        return Amount.fromInt(balance, token.decimals, token.currency);
    }

    /**
     * Gets the token balance corresponding to the given source and token address.
     * @param source The bridge source.
     * @param tokenAddress The token address.
     * @returns The token balance.
     */
    async getBridgeSourceTokenBalance(source: BridgeSource, tokenAddress: string): Promise<Amount> {
        const provider = this.bridgeProvidersController.getSourceProvider(source);

        if (!isTokenProvider(provider)) throw new DomainError(BridgeTokenErrors.NOT_TOKEN_PROVIDER);

        const [token, balance] = await Promise.all([
            this.getBridgeSourceToken(source, tokenAddress),
            provider.getTokenBalance(tokenAddress),
        ]);

        return Amount.fromInt(balance, token.decimals, token.currency);
    }

    /**
     * Gets the token name corresponding to the given source and XChainBridge.
     * @param source The bridge source.
     * @param xChainBridge The XChainBridge.
     * @returns The token name.
     */
    async getBridgeSourceXChainBridgeTokenName(source: BridgeSource, xChainBridge: XChainBridge<ChainType, ChainType>): Promise<string> {
        const chain = this.bridgeChainsController.getSourceChain(source);
        const provider = this.bridgeProvidersController.getSourceProvider(source);
        const xChainBridgeChainForChainType = this.getChainXChainBridgeChain(chain, xChainBridge);
        const xChainBridgeForChainType = this.getChainXChainBridge(chain, xChainBridge);

        return provider.getXChainBridgeTokenName(xChainBridgeChainForChainType, xChainBridgeForChainType);
    }

    /**
     * Gets the token name corresponding to the given source and token address.
     * @param source The bridge source.
     * @param tokenAddress The token address.
     * @returns The token name.
     */
    async getBridgeSourceTokenName(source: BridgeSource, tokenAddress: string): Promise<string> {
        const provider = this.bridgeProvidersController.getSourceProvider(source);

        if (!isTokenProvider(provider)) throw new DomainError(BridgeTokenErrors.NOT_TOKEN_PROVIDER);

        return provider.getTokenName(tokenAddress);
    }

    /**
     * Sets a listener for the given event.
     * @param event The event.
     * @param listener The listener.
     * @returns An unsubscribe function.
     */
    on = this.eventEmitter.on.bind(this.eventEmitter);
}
