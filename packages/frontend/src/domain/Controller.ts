export default class Controller<T> {
    protected getState: () => T;
    protected setState: (state: T | ((state: T) => T)) => void;

    constructor(getState: () => T, setState: (state: T | ((state: T) => T)) => void) {
        this.getState = getState;
        this.setState = setState;
    }
}
