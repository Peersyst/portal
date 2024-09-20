import { BridgeTransferResult, BridgeManagerEvents } from "xchain-sdk";
import { EventEmitter } from "@frontend/events";

export interface IBridgeTransferController {
    swap(): void;
    destinationCanReceive(): Promise<boolean>;
    transfer(amount: string): Promise<BridgeTransferResult>;
    on: EventEmitter<BridgeManagerEvents>["on"];
}
