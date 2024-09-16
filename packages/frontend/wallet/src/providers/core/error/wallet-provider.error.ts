import { AnyObject } from "@swisstype/essential";

export class WalletProviderError extends Error {
    message: string;
    data?: AnyObject;

    constructor(message: string, data?: AnyObject) {
        super(message);
        this.name = "WalletProviderError";
        this.message = message;
        this.data = data;
    }
}
