import { DeepPartial } from "@swisstype/essential";
import deepmerge from "./utils/deepmerge";

export function mockify<T extends object>(defaultValues: DeepPartial<T> = {}): { new (data?: DeepPartial<T>): T } {
    return class {
        constructor(data: DeepPartial<T> = {}) {
            Object.assign(this, deepmerge(defaultValues, data));
        }
    } as { new (data?: DeepPartial<T>): T };
}
