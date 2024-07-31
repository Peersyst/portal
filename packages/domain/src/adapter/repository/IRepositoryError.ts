import { AnyObject } from "@swisstype/essential";

export interface IRepositoryError extends Error {
    code: string;
    data?: AnyObject;
}
