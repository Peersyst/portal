import { EventEmitter } from "@frontend/events";
import { BridgeManagerEvents } from "../../ui/interfaces/i-bridge-manager.controller";

export class BridgeManagerEventEmitter extends EventEmitter<BridgeManagerEvents> {}
