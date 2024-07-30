import { StateStorage } from "zustand/middleware";
import { CreateStateReturn } from "../createState";
import { Difference } from "@swisstype/essential";

export interface IDomainStates {}
export interface IStates extends IDomainStates {}

export type States<S extends Record<string, any> = IStates> = { [K in keyof S]: CreateStateReturn<S[K]> };

export interface IStateManager {
    initialization: Promise<void>;
    readonly persistenceStorage: StateStorage | undefined;
    setPersistenceStorage(storage: StateStorage): void;
    readonly states: States;
    createStates(extraStates: States<Difference<IStates, IDomainStates>>): void;
}
