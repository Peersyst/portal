export abstract class Singleton {
    private static instance: Singleton;

    protected constructor() {
        if (!Singleton.instance) Singleton.instance = this;

        return Singleton.instance;
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) throw new Error(`${this.name} has not been initialized`);

        return Singleton.instance;
    }
}
