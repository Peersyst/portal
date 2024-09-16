import { BridgeSource } from "xchain-sdk";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { BridgeChainsEventEmitter } from "../../events/bridge-chains.events";
import { IBridgeChainsState } from "../../states/bridge-chains.state";
import { IBridgeApi } from "../../interfaces/i-bridge.api";
import { State } from "@frontend/core/domain/state";
import { IBridgeChainsRepository } from "../../interfaces/i-bridge-chains.repository";
import { ChainDto } from "@shared/api";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeChainsErrors } from "../../errors/bridge-chains.errors";

export class BridgeChainsController implements IBridgeChainsController {
    /**
     * Reference to the event emitter.
     */
    private readonly eventEmitter = new BridgeChainsEventEmitter();

    /**
     * Gets the current bridge chains state.
     * @returns The bridge chains.
     */
    private get bridgeChains(): IBridgeChainsState {
        return this.bridgeChainsState.getState();
    }

    constructor(
        private readonly bridgeApi: IBridgeApi,
        private readonly bridgeChainsState: State<IBridgeChainsState>,
        private readonly bridgeChainsRepository: IBridgeChainsRepository,
    ) {}

    /**
     * Initializes the bridge chains controller.
     */
    async onInit(): Promise<void> {
        await this.recoverBridgeChains();
    }

    /**
     * Recovers the bridge chains.
     */
    private async recoverBridgeChains(): Promise<void> {
        const chains = await this.getChains();
        const bridgeChains = await this.bridgeChainsRepository.getBridgeChains();

        if (bridgeChains) {
            let originChain: ChainDto | undefined;
            let destinationChain: ChainDto | undefined;

            for (let i = 0; i < chains.length && (!originChain || !destinationChain); i++) {
                if (chains[i].name === bridgeChains.originChain) originChain = chains[i];
                else if (chains[i].name === bridgeChains.destinationChain) destinationChain = chains[i];
            }

            this.bridgeChainsState.setState({
                originChain,
                destinationChain,
            });
        }

        this.eventEmitter.emit("bridgeChainsLoad", this.bridgeChains);
    }

    /**
     * Gets the chains.
     * @returns The chains.
     */
    getChains(): Promise<ChainDto[]> {
        return this.bridgeApi.findAllChains();
    }

    /**
     * Gets the origin chain.
     * @returns The origin chain.
     */
    getOriginChain(): ChainDto {
        if (!this.bridgeChains.originChain) throw new DomainError(BridgeChainsErrors.ORIGIN_CHAIN_NOT_SET);
        return this.bridgeChains.originChain;
    }

    /**
     * Sets the origin chain.
     * @param chain The chain to set as the origin chain.
     */
    setOriginChain(chain: ChainDto): void {
        const chains = this.bridgeChains;
        const nextChains: IBridgeChainsState = {
            ...chains,
            originChain: chain,
        };
        this.eventEmitter.emit("bridgeChainsChange", nextChains, chains);
        this.bridgeChainsState.setState(nextChains);
        this.bridgeChainsRepository.setOriginChain(chain.name);
    }

    /**
     * Gets the destination chain.
     * @returns The destination chain.
     */
    getDestinationChain(): ChainDto {
        if (!this.bridgeChains.destinationChain) throw new DomainError(BridgeChainsErrors.DESTINATION_CHAIN_NOT_SET);
        return this.bridgeChains.destinationChain;
    }

    /**
     * Sets the destination chain.
     * @param chain The chain to set as the destination chain.
     */
    setDestinationChain(chain: ChainDto): void {
        const chains = this.bridgeChains;
        const nextChains: IBridgeChainsState = {
            ...chains,
            destinationChain: chain,
        };
        this.eventEmitter.emit("bridgeChainsChange", nextChains, chains);
        this.bridgeChainsState.setState(nextChains);
        this.bridgeChainsRepository.setDestinationChain(chain.name);
    }

    /**
     * Gets the bridge chains.
     * @returns The bridge chains.
     */
    getBridgeChains(): NonNullable<Required<IBridgeChainsState>> {
        const originChain = this.getOriginChain();
        const destinationChain = this.getDestinationChain();

        return {
            originChain,
            destinationChain,
        };
    }

    /**
     * Gets the source chain.
     * @param source The source.
     * @returns The source chain.
     */
    getSourceChain(source: BridgeSource): ChainDto {
        return source === BridgeSource.ORIGIN ? this.getOriginChain() : this.getDestinationChain();
    }

    /**
     * Swaps the bridge chains.
     */
    swap(): void {
        this.bridgeChainsState.setState((prevState) => {
            const swappedChains = {
                originChain: prevState.destinationChain,
                destinationChain: prevState.originChain,
            };

            this.eventEmitter.emit("bridgeChainsSwap", swappedChains);

            // Persist swap
            this.bridgeChainsRepository.setBridgeChains({
                originChain: swappedChains.originChain?.name,
                destinationChain: swappedChains.destinationChain?.name,
            });

            return swappedChains;
        });
    }

    /**
     * Sets a listener for the given event.
     * @param event The event.
     * @param listener The listener.
     * @returns An unsubscribe function.
     */
    on = this.eventEmitter.on.bind(this.eventEmitter);
}
