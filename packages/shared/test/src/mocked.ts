export function mockedFn<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
    return fn as jest.MockedFunction<T>;
}

export function mockedClass<T extends new (...args: any[]) => any>(cls: T): jest.MockedClass<T> {
    return cls as jest.MockedClass<T>;
}
