import { EmitterSubscription, DeviceEventEmitter } from "react-native";
import { AnyObject } from "@swisstype/essential";
import { UIError, UIErrorSeverity } from "../ui-error";

export class ReactNativeErrorEvent {
    static type = `ui-error`;

    error: UIError;

    constructor(error: UIError) {
        this.error = error;
    }

    static addListener(callback: (event: ReactNativeErrorEvent) => void): EmitterSubscription {
        return DeviceEventEmitter.addListener(ReactNativeErrorEvent.type, callback);
    }

    static removeListener(subscription: EmitterSubscription): void {
        subscription.remove();
    }

    static dispatch(message: string, severity: UIErrorSeverity = "error", data?: AnyObject): void {
        DeviceEventEmitter.emit(ReactNativeErrorEvent.type, new ReactNativeErrorEvent(new UIError(message, severity, data)));
    }
}
