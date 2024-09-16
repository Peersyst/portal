import { EventEmitter } from "@frontend/events";
import { BridgeDoor } from "xchain-sdk";

export type BridgeDoorsEvents = {
    bridgeDoorsLoad: (bridgeDoors: [BridgeDoor, BridgeDoor] | undefined) => void;
};

export interface IBridgeDoorsController {
    getBridgeDoors(): [BridgeDoor, BridgeDoor];
    on: EventEmitter<BridgeDoorsEvents>["on"];
}
