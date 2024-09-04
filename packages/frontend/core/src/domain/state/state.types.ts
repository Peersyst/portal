export interface State<T> {
    getState: () => T;
    setState: (value: Partial<T> | ((prevState: T) => T)) => void;
    subscribe: (listener: (state: T, prevState: T) => void) => () => void;
    reset: () => void;
}
