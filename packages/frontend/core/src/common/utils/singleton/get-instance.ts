interface ISingleton {
    new (...args: any[]): any;
    getInstance(): any;
}

export function getInstance<T extends ISingleton>(singleton: T): InstanceType<T> {
    return singleton.getInstance();
}
