import { BridgeSource } from "xchain-sdk";
import { IBridgeProvidersController } from "../../../ui/interfaces/i-bridge-providers.controller";
import { IProvider } from "@frontend/blockchain/providers/interfaces";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeProvidersErrors } from "../../errors/bridge-providers.errors";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { ProviderFactory } from "@frontend/blockchain/providers";
import { IBridgeChainsState } from "../../states/bridge-chains.state";

export class BridgeProvidersController implements IBridgeProvidersController {
    private _originProvider: IProvider | undefined;
    private get originProvider(): IProvider {
        if (!this._originProvider) throw new DomainError(BridgeProvidersErrors.ORIGIN_PROVIDER_NOT_SET);
        return this._originProvider;
    }
    private set originProvider(provider: IProvider | undefined) {
        this._originProvider = provider;
    }

    private _destinationProvider: IProvider | undefined;
    private get destinationProvider(): IProvider {
        if (!this._destinationProvider) throw new DomainError(BridgeProvidersErrors.DESTINATION_PROVIDER_NOT_SET);
        return this._destinationProvider;
    }
    private set destinationProvider(provider: IProvider | undefined) {
        this._destinationProvider = provider;
    }

    constructor(private readonly bridgeChainsController: IBridgeChainsController) {}

    /**
     * Initializes the bridge providers controller.
     */
    onInit(): void {
        this.bridgeChainsController.on("bridgeChainsLoad", (chains) => {
            this.handleProvidersLoad(chains);
        });

        this.bridgeChainsController.on("bridgeChainsSwap", () => {
            this.handleProvidersSwap();
        });

        this.bridgeChainsController.on("bridgeChainsChange", (chains, prevChains) => {
            this.handleProvidersChange(chains, prevChains);
        });
    }

    /**
     * Handles the providers load.
     * @param chainsState The chains state.
     */
    private handleProvidersLoad({ originChain, destinationChain }: IBridgeChainsState): void {
        if (originChain) this.originProvider = ProviderFactory(originChain);
        if (destinationChain) this.destinationProvider = ProviderFactory(destinationChain);
    }

    /**
     * Handles the providers change.
     * @param chainsState The chains state.
     * @param prevChainsState The previous chains state.
     */
    private handleProvidersChange(
        { originChain, destinationChain }: IBridgeChainsState,
        { originChain: prevOriginChain, destinationChain: prevDestinationChain }: IBridgeChainsState,
    ): void {
        if (originChain !== prevOriginChain) {
            if (originChain) this.originProvider = ProviderFactory(originChain);
            else this.originProvider = undefined;
        }
        if (destinationChain !== prevDestinationChain) {
            if (destinationChain) this.destinationProvider = ProviderFactory(destinationChain);
            else this.destinationProvider = undefined;
        }
    }

    /**
     * Handles the providers swap.
     */
    private handleProvidersSwap(): void {
        const originProvider = this.originProvider;
        this.originProvider = this.destinationProvider;
        this.destinationProvider = originProvider;
    }

    /**
     * Gets the origin provider.
     * @returns The origin provider.
     */
    getOriginProvider(): IProvider {
        return this.originProvider;
    }

    /**
     * Gets the destination provider.
     * @returns The destination provider.
     */
    getDestinationProvider(): IProvider {
        return this.destinationProvider;
    }

    /**
     * Gets the source provider.
     * @param source The source.
     * @returns The source provider.
     */
    getSourceProvider(source: BridgeSource): IProvider {
        return source === BridgeSource.ORIGIN ? this.getOriginProvider() : this.getDestinationProvider();
    }
}
