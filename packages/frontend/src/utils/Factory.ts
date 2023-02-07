export default class Factory {
    protected static resolve<C extends object>(obj: C | undefined, factory: () => C): C {
        if (!obj) obj = factory();
        return obj;
    }

    protected static resolveKey<K extends keyof Factory, C extends Factory[K]>(key: K, factory: () => C): C {
        if (!this[key]) this[key] = factory();
        return this[key];
    }
}
