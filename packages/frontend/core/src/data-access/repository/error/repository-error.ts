import { AnyObject } from "@swisstype/essential";

export default class RepositoryError extends Error {
    message: string;
    data?: AnyObject;

    constructor(message: string, data?: AnyObject) {
        super(message);
        this.name = "RepositoryError";
        this.message = message;
        this.data = data;
    }
}
