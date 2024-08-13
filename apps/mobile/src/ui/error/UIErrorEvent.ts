import { configManager } from "@/common/config";
import UIError, { UIErrorMessage } from "./UIError";
import { EmitterSubscription, DeviceEventEmitter } from "react-native";
import { AnyObject } from "@swisstype/essential";

export type UIErrorEventSeverity = "error" | "warning";

export default class UIErrorEvent {
    static type = `${configManager.get("projectName")}-error`;

    error: UIError;

    constructor(error: UIError) {
        this.error = error;
    }

    static addListener(callback: (event: UIErrorEvent) => void): EmitterSubscription {
        return DeviceEventEmitter.addListener(UIErrorEvent.type, callback);
    }

    static removeListener(subscription: EmitterSubscription): void {
        subscription.remove();
    }

    static dispatch(message: UIErrorMessage, severity: UIErrorEventSeverity = "error", data?: AnyObject): void {
        DeviceEventEmitter.emit(UIErrorEvent.type, new UIErrorEvent(new UIError(message, severity, data)));
    }
}
