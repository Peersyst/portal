import { EmitterSubscription, DeviceEventEmitter } from "react-native";
import { AnyObject } from "@swisstype/essential";
import { UIError, UIErrorSeverity } from "../ui-error";

export class ReactNativeErrorEvent {
    static type = `ui-error`;

    error: UIError;

    constructor(error: UIError) {
        this.error = error;
    }

    /**
     * Adds a listener to the ReactNativeErrorEvent.
     * @param callback The callback to be called when the event is dispatched.
     * @returns The subscription object.
     */
    static addListener(callback: (event: ReactNativeErrorEvent) => void): EmitterSubscription {
        return DeviceEventEmitter.addListener(ReactNativeErrorEvent.type, callback);
    }

    /**
     * Removes a listener from the ReactNativeErrorEvent.
     * @param subscription The subscription object to remove.
     */
    static removeListener(subscription: EmitterSubscription): void {
        subscription.remove();
    }

    /**
     * Dispatches an error event.
     * @param message The error message.
     * @param severity The severity of the error.
     * @param data The error data.
     */
    static dispatch(message: string, severity: UIErrorSeverity = "error", data?: AnyObject): void {
        DeviceEventEmitter.emit(ReactNativeErrorEvent.type, new ReactNativeErrorEvent(new UIError(message, severity, data)));
    }
}
