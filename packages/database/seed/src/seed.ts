import { DeepPartial, EntityTarget } from "typeorm";
import { AnyObject } from "@swisstype/essential";

export class Seed<T extends AnyObject> {
    constructor(readonly entity: EntityTarget<T>, readonly seed: Record<string, DeepPartial<T>[]>) {}

    getSeed(env: string): DeepPartial<T>[] {
        return this.seed[env] || [];
    }
}
