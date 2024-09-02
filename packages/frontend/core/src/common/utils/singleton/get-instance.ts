export function getInstance<T extends { new (...args: any[]): any }>(singleton: T): InstanceType<T> {
    if ("getInstance" in singleton && typeof singleton.getInstance === "function") {
        return singleton.getInstance();
    }

    throw new Error(`${singleton.name} is not a singleton`);
}
