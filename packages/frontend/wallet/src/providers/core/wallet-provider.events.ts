import { EventEmitter } from "@frontend/events";
import { WalletProviderEvents } from "./interfaces/i-wallet-provider";

export class WalletProviderEventEmitter extends EventEmitter<WalletProviderEvents> {}
