import { config } from "common/config";
import UIError, { UIErrorMesage } from "./UIError";
import { EmitterSubscription, DeviceEventEmitter } from "react-native";

export type UIErrorEventSeverity = "error" | "warning";

export default class UIErrorEvent {
    static type = `${config.projectName}-error`;

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

    static dispatch(message: UIErrorMesage, severity: UIErrorEventSeverity = "error"): void {
        DeviceEventEmitter.emit(UIErrorEvent.type, new UIErrorEvent(new UIError(message, severity)));
    }
}
