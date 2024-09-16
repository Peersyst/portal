import { EventEmitter } from "@frontend/events";
import { BridgeDoorsEvents } from "../../ui/interfaces/i-bridge-doors.controller";

export class BridgeDoorsEventEmitter extends EventEmitter<BridgeDoorsEvents> {}
