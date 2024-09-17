import { BridgeManager } from "xchain-sdk";
import { IBridgeManagerController } from "../../../ui/interfaces/i-bridge-manager.controller";
import { BridgeManagerEventEmitter } from "../../events/bridge-manager.events";
import { DomainError } from "@frontend/core/domain/error";
import { BridgeManagerErrors } from "../../errors/bridge-manager.errors";
import { Controller } from "@frontend/core/domain/controller";

@Controller()
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

    constructor() {}

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
