import { EventEmitter } from "@frontend/events";
import { BridgeTokenEvents } from "../../ui/interfaces/i-bridge-token.controller";

export class BridgeTokenEventEmitter extends EventEmitter<BridgeTokenEvents> {}
