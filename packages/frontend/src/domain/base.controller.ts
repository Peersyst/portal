export default class BaseController<T> {
    // Dummy functions that will be overridden in the constructor
    protected getState(): T {
        return {} as T;
    }
    protected setState(state: T | ((state: T) => T)): void {
        // eslint-disable-next-line no-console
        console.log(state);
    }

    constructor(getState: () => T, setState: (state: T | ((state: T) => T)) => void) {
        this.getState = getState;
        this.setState = setState;
    }
}

// TS bug detecting T not being used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type BaseControllerParameters<T> = ConstructorParameters<typeof BaseController<T>>;
