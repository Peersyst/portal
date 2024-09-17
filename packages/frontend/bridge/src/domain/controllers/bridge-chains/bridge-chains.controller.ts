import { BridgeSource } from "xchain-sdk";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { BridgeChainsEventEmitter } from "../../events/bridge-chains.events";
import { IBridgeChainsState } from "../../states/bridge-chains.state";
import { State } from "@frontend/core/domain/state";
import { IBridgeChainsRepository } from "../../interfaces/i-bridge-chains.repository";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeChainsErrors } from "../../errors/bridge-chains.errors";
import { Chain } from "@frontend/chain";
import { IChainController } from "@frontend/chain/ui/interfaces";
import { Controller } from "@frontend/core/domain/controller";

@Controller()
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
        private readonly chainController: IChainController,
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
        const chains = await this.chainController.getChains();
        const bridgeChains = await this.bridgeChainsRepository.getBridgeChains();

        if (bridgeChains) {
            let originChain: Chain | undefined;
            let destinationChain: Chain | undefined;

            for (let i = 0; i < chains.length && (!originChain || !destinationChain); i++) {
                if (chains[i].id === bridgeChains.originChain) originChain = chains[i];
                else if (chains[i].id === bridgeChains.destinationChain) destinationChain = chains[i];
            }

            this.bridgeChainsState.setState({
                originChain,
                destinationChain,
            });
        }

        this.eventEmitter.emit("bridgeChainsLoad", this.bridgeChains);
    }

    /**
     * Gets the origin chain.
     * @returns The origin chain.
     */
    getOriginChain(): Chain {
        if (!this.bridgeChains.originChain) throw new DomainError(BridgeChainsErrors.ORIGIN_CHAIN_NOT_SET);
        return this.bridgeChains.originChain;
    }

    /**
     * Sets the origin chain.
     * @param chain The chain to set as the origin chain.
     */
    setOriginChain(chain: Chain): void {
        const chains = this.bridgeChains;
        const nextChains: IBridgeChainsState = {
            ...chains,
            originChain: chain,
        };
        this.eventEmitter.emit("bridgeChainsChange", nextChains, chains);
        this.bridgeChainsState.setState(nextChains);
        this.bridgeChainsRepository.setOriginChain(chain.id);
    }

    /**
     * Gets the destination chain.
     * @returns The destination chain.
     */
    getDestinationChain(): Chain {
        if (!this.bridgeChains.destinationChain) throw new DomainError(BridgeChainsErrors.DESTINATION_CHAIN_NOT_SET);
        return this.bridgeChains.destinationChain;
    }

    /**
     * Sets the destination chain.
     * @param chain The chain to set as the destination chain.
     */
    setDestinationChain(chain: Chain): void {
        const chains = this.bridgeChains;
        const nextChains: IBridgeChainsState = {
            ...chains,
            destinationChain: chain,
        };
        this.eventEmitter.emit("bridgeChainsChange", nextChains, chains);
        this.bridgeChainsState.setState(nextChains);
        this.bridgeChainsRepository.setDestinationChain(chain.id);
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
    getSourceChain(source: BridgeSource): Chain {
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
                originChain: swappedChains.originChain?.id,
                destinationChain: swappedChains.destinationChain?.id,
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
