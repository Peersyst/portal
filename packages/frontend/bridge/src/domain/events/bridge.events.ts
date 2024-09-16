import { EventEmitter } from "@frontend/events";
import { BridgeEvents } from "../../ui/interfaces/i-bridge.controller";

export class BridgeEventEmitter extends EventEmitter<BridgeEvents> {}
