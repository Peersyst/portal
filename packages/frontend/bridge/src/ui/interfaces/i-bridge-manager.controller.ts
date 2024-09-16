import { EventEmitter } from "@frontend/events";
import { BridgeManager } from "xchain-sdk";

export type BridgeManagerEvents = {
    bridgeManagerLoad: (bridgeManager: BridgeManager | undefined) => void;
};

export interface IBridgeManagerController {
    getBridgeManager(): BridgeManager;
    on: EventEmitter<BridgeManagerEvents>["on"];
}
