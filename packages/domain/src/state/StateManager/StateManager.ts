import { StateStorage } from "zustand/middleware";
import { IStateManager, States, IDomainStates, IStates } from "./StateManager.types";
import { Difference } from "@swisstype/essential";
import { createAuthState } from "../../modules";

class StateManager implements IStateManager {
    private _persistenceStorage: StateStorage | undefined = undefined;
    get persistenceStorage(): StateStorage | undefined {
        return this._persistenceStorage;
    }
    private set persistenceStorage(storage: StateStorage) {
        this._persistenceStorage = storage;
    }

    setPersistenceStorage(storage: StateStorage): void {
        this.persistenceStorage = storage;
    }

    private resolveInitializationPromise: (() => void) | undefined;
    initialization = new Promise<void>((resolve) => {
        this.resolveInitializationPromise = resolve;
    });

    private _states = new Proxy({} as States, {
        get() {
            throw new Error("States not initialized");
        },
    });
    get states(): States {
        return this._states;
    }
    private set states(states: States) {
        this._states = states;
    }

    createStates(extraStates: States<Difference<IStates, IDomainStates>>): void {
        this.states = {
            auth: createAuthState(),
            ...extraStates,
        };

        Promise.all(Object.values(this.states).map((state) => state.promise)).then(() => {
            this.resolveInitializationPromise?.();
        });
    }
}

export default new StateManager();
