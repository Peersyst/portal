import { EventEmitter } from "@frontend/events";
import { BridgeChainsEvents } from "../../ui/interfaces/i-bridge-chains.controller";

export class BridgeChainsEventEmitter extends EventEmitter<BridgeChainsEvents> {}
