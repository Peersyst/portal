import { Bridge, BridgeDirection, XChainBridge, XChainBridgeChain } from "xchain-sdk";
import { IBridgeController } from "../../../ui/interfaces/i-bridge.controller";
import { State } from "@frontend/core/domain/state";
import { IBridgeState } from "../../states/bridge.state";
import { BridgeEventEmitter } from "../../events/bridge.events";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { IBridgeTokenController } from "../../../ui/interfaces/i-bridge-token.controller";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeErrors } from "../../errors/bridge.errors";
import Amount from "@shared/amount";
import { Controller } from "@frontend/core/domain/controller";

@Controller()
export class BridgeController implements IBridgeController {
    /**
     * Reference to the event emitter.
     */
    private eventEmitter = new BridgeEventEmitter();

    constructor(
        private readonly bridgeState: State<IBridgeState>,
        private readonly bridgeChainsController: IBridgeChainsController,
        private readonly bridgeTokenController: IBridgeTokenController,
    ) {}

    /**
     * Initializes the bridge controller.
     */
    onInit(): void {
        this.bridgeChainsController.on("bridgeChainsChange", () => {
            this.setBridge(undefined);
        });

        this.bridgeTokenController.on("bridgeVerifiedTokensLoad", (verifiedTokens) => {
            this.setBridge(verifiedTokens[0].xChainBridge);
        });
    }

    /**
     * Gets the current bridge config state.
     * @returns The current bridge config state.
     */
    private get bridge(): IBridgeState["bridge"] {
        return this.bridgeState.getState().bridge;
    }

    /**
     * Gets the current bridge config.
     * @returns The current bridge config.
     */
    getBridge(): IBridgeState["bridge"] {
        return this.bridge;
    }

    /**
     * Gets the origin XChainBridgeChain.
     * @returns The origin XChainBridgeChain.
     */
    getOriginXChainBridgeChain(): XChainBridgeChain | undefined {
        return this.bridge?.originXChainBridgeChain;
    }

    /**
     * Gets the destination XChainBridgeChain.
     * @returns The destination XChainBridgeChain.
     */
    getDestinationXChainBridgeChain(): XChainBridgeChain | undefined {
        return this.bridge?.destinationXChainBridgeChain;
    }

    /**
     * Sets the bridge config.
     * @param xChainBridge The XChainBridge to set.
     */
    setBridge(xChainBridge: XChainBridge | undefined): void {
        let value: IBridgeState["bridge"];

        if (xChainBridge) {
            const { originChain, destinationChain } = this.bridgeChainsController.getBridgeChains();

            const lockingChainId = xChainBridge.lockingChain.id;
            const issuingChainId = xChainBridge.issuingChain.id;
            if (
                (lockingChainId !== originChain.id && lockingChainId !== destinationChain.id) ||
                (issuingChainId !== originChain.id && issuingChainId !== destinationChain.id)
            )
                throw new DomainError(BridgeErrors.BRIDGE_DOES_NOT_CORRESPOND_TO_CHAINS);

            const direction =
                xChainBridge.lockingChain.id === originChain.id ? BridgeDirection.LOCKING_TO_ISSUING : BridgeDirection.ISSUING_TO_LOCKING;

            value = new Bridge(direction, xChainBridge);
        } else {
            value = undefined;
        }

        this.eventEmitter.emit("bridgeChange", value);
        this.bridgeState.setState({ bridge: value });
    }

    /**
     * Swaps the bridge.
     */
    swap(): void {
        this.bridgeState.setState((prevState) => ({
            bridge: prevState.bridge ? prevState.bridge.swapped() : undefined,
        }));
    }

    /**
     * Gets the create bridge reward.
     * @param _doorAddress The door address.
     * @returns The create bridge reward.
     */
    getCreateBridgeReward(_doorAddress: string): Promise<Amount> {
        const { originChain } = this.bridgeChainsController.getBridgeChains();

        return Promise.resolve(Amount.fromDec("25", originChain.nativeToken.decimals, originChain.nativeToken.symbol));
    }

    /**
     * Sets a listener for the given event.
     * @param event The event.
     * @param listener The listener.
     * @returns An unsubscribe function.
     */
    on = this.eventEmitter.on.bind(this.eventEmitter);
}
