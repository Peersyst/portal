import { createStore, Mutate, StateCreator, StoreApi, StoreMutatorIdentifier } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { StateManager } from "./StateManager";

export type CreateStateOptions = {
    persist?: boolean;
};

export type CreateStateReturn<T, Mos extends [StoreMutatorIdentifier, unknown][] = []> = Mutate<StoreApi<T>, Mos> & {
    reset: () => void;
    promise: Promise<void>;
};

export function createState<T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
    name: string,
    initializer: StateCreator<T, [], Mos>,
    { persist: persistOption = true }: CreateStateOptions = {},
): CreateStateReturn<T, Mos> {
    let resolvePromise: () => void;
    const promise = new Promise<void>((resolve) => (resolvePromise = resolve));

    let state: CreateStateReturn<T, Mos>;

    if (StateManager.persistenceStorage && persistOption) {
        state = createStore<T, Mos>(
            persist(initializer, {
                name,
                storage: createJSONStorage(() => StateManager.persistenceStorage!),
                /**
                 * The arrow function will be called before the state rehydration
                 * The resolvePromise will be called after the state rehydration or when an error occurred.
                 */
                onRehydrateStorage: () => resolvePromise,
            }) as StateCreator<T, [], Mos>,
        ) as CreateStateReturn<T, Mos>;
    } else {
        resolvePromise!();

        state = createStore<T, Mos>(initializer) as CreateStateReturn<T, Mos>;
    }

    state.reset = () => {
        // Idk what this `setState` generic is for...
        state.setState<any>(state.getInitialState(), true);

        if ("clearStorage" in state && typeof state.clearStorage === "function") state.clearStorage();
    };

    state.promise = promise;

    return state;
}
