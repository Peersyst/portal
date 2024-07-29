interface State<T> {
    getState: () => T;
    setState: (value: T | ((prevState: T) => T)) => void;
}

export default State;
