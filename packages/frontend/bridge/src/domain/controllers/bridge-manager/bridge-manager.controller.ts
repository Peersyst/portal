import { BridgeDoor, BridgeManager } from "xchain-sdk";
import { IBridgeManagerController } from "../../../ui/interfaces/i-bridge-manager.controller";
import { BridgeManagerEventEmitter } from "../../events/bridge-manager.events";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeManagerErrors } from "../../errors/bridge-manager.errors";
import { IBridgeDoorsController } from "../../../ui/interfaces/i-bridge-doors.controller";

export class BridgeManagerController implements IBridgeManagerController {
    /**
     * Reference to the event emitter.
     */
    private readonly eventEmitter = new BridgeManagerEventEmitter();

    private _bridgeManager: BridgeManager | undefined;
    private get bridgeManager(): BridgeManager {
        if (!this._bridgeManager) throw new DomainError(BridgeManagerErrors.BRIDGE_DOORS_NOT_SET);
        return this._bridgeManager;
    }
    private set bridgeManager(bridgeDoors: BridgeManager | undefined) {
        this._bridgeManager = bridgeDoors;
    }

    constructor(private readonly bridgeDoorsController: IBridgeDoorsController) {}

    /**
     * Initializes the bridge manager controller.
     */
    async onInit(): Promise<void> {
        this.bridgeDoorsController.on("bridgeDoorsLoad", (bridgeDoors) => {
            this.loadBridgeManager(bridgeDoors);
        });
    }

    /**
     * Loads the bridge manager.
     * @param bridgeDoors The bridge doors.
     */
    private async loadBridgeManager(bridgeDoors: [BridgeDoor, BridgeDoor] | undefined): Promise<void> {
        if (bridgeDoors) {
            const [mainchainBridgeDoor, sidechainBridgeDoor] = bridgeDoors;

            this.bridgeManager = await BridgeManager.createAsync(mainchainBridgeDoor, sidechainBridgeDoor);

            this.eventEmitter.emit("bridgeManagerLoad", this.bridgeManager);
        } else {
            this.bridgeManager = undefined;
        }
    }

    /**
     * Gets the bridge manager.
     * @returns The bridge manager.
     */
    getBridgeManager(): BridgeManager {
        return this.bridgeManager;
    }

    /**
     * Sets a listener for the given event.
     * @param event The event.
     * @param listener The listener.
     * @returns An unsubscribe function.
     */
    on = this.eventEmitter.on.bind(this.eventEmitter);
}
