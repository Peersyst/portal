import { DeepPartial, EntityTarget } from "typeorm";
import { AnyObject } from "@swisstype/essential";

export class Seed<T extends AnyObject> {
    constructor(
        readonly entity: EntityTarget<T>,
        readonly seed: Record<string, DeepPartial<T>[]>,
    ) {}

    /**
     * Gets the seed for the given environment.
     * @param env The environment.
     * @returns The seed for the given environment.
     */
    getSeed(env: string): DeepPartial<T>[] {
        return this.seed[env] || [];
    }
}
