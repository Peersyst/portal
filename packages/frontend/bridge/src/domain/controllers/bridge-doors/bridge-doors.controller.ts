import { BridgeDoor } from "xchain-sdk";
import { IBridgeDoorsController } from "../../../ui/interfaces/i-bridge-doors.controller";
import { BridgeDoorsEventEmitter } from "../../events/bridge-doors.events";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeDoorsErrors } from "../../errors/bridge-doors.errors";
import { IBridgeApi } from "../../interfaces/i-bridge.api";
import { IBridgeChainsController } from "../../../ui/interfaces/i-bridge-chains.controller";
import { ChainDto } from "@shared/api";
import { BridgeDoorFactory } from "./bridge-doors.factory";

export class BridgeDoorsController implements IBridgeDoorsController {
    /**
     * Reference to the event emitter.
     */
    private readonly eventEmitter = new BridgeDoorsEventEmitter();

    private _bridgeDoors: [BridgeDoor, BridgeDoor] | undefined;
    private get bridgeDoors(): [BridgeDoor, BridgeDoor] {
        if (!this._bridgeDoors) throw new DomainError(BridgeDoorsErrors.BRIDGE_DOORS_NOT_SET);
        return this._bridgeDoors;
    }
    private set bridgeDoors(bridgeDoors: [BridgeDoor, BridgeDoor] | undefined) {
        this._bridgeDoors = bridgeDoors;
    }

    constructor(
        private readonly bridgeApi: IBridgeApi,
        private readonly bridgeChainsController: IBridgeChainsController,
    ) {}

    /**
     * Initializes the bridge doors controller.
     */
    async onInit(): Promise<void> {
        this.bridgeChainsController.on("bridgeChainsLoad", ({ originChain, destinationChain }) => {
            this.loadBridgeDoors(originChain, destinationChain);
        });

        this.bridgeChainsController.on("bridgeChainsChange", ({ originChain, destinationChain }) => {
            this.loadBridgeDoors(originChain, destinationChain);
        });
    }

    /**
     * Loads the bridge doors.
     * @param originChain The origin chain.
     * @param destinationChain The destination chain.
     */
    private async loadBridgeDoors(originChain: ChainDto | undefined, destinationChain: ChainDto | undefined): Promise<void> {
        if (originChain && destinationChain) {
            const { mainchainDoorAddress, mainchain, sidechainDoorAddress, sidechain } = await this.bridgeApi.findBridgeDoorPair([
                originChain.name,
                destinationChain.name,
            ]);

            this.bridgeDoors = [BridgeDoorFactory(mainchainDoorAddress, mainchain), BridgeDoorFactory(sidechainDoorAddress, sidechain)];

            this.eventEmitter.emit("bridgeDoorsLoad", this.bridgeDoors);
        } else {
            this.bridgeDoors = undefined;

            this.eventEmitter.emit("bridgeDoorsLoad", undefined);
        }
    }

    /**
     * Gets the bridge doors.
     * @returns The bridge doors.
     */
    getBridgeDoors(): [BridgeDoor, BridgeDoor] {
        return this.bridgeDoors;
    }

    /**
     * Sets a listener for the given event.
     * @param event The event.
     * @param listener The listener.
     * @returns An unsubscribe function.
     */
    on = this.eventEmitter.on.bind(this.eventEmitter);
}
