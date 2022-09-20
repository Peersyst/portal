export type Env = "production" | "staging" | "preview" | "development" | "test";

interface EnvConfig<T> {
    key: string;
    parseFn?: (key: string) => T;
}

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export function config<T extends string | number | boolean>({
    env,
    validateFn = () => true,
    defaultValue,
}: {
    env?: EnvConfig<T>;
    validateFn?: (t: any) => boolean;
    defaultValue?: T | PartialRecord<Env | "all", T>;
}): T {
    let result: T;
    if (env && process.env[env.key]) result = env.parseFn ? env.parseFn(process.env[env.key]) : (process.env[env.key] as T);
    else if (
        typeof defaultValue !== "object" ||
        (!defaultValue["all"] &&
            !defaultValue["production"] &&
            !defaultValue["staging"] &&
            !defaultValue["preview"] &&
            !defaultValue["development"] &&
            !defaultValue["test"])
    )
        result = defaultValue as T;
    else if (defaultValue?.[process.env.CONFIG_ENV || process.env.NODE_ENV])
        result = defaultValue[process.env.CONFIG_ENV || process.env.NODE_ENV];
    else if (defaultValue?.all) {
        result = defaultValue.all;
    }
    if (!validateFn(result)) throw new Error(`Error parsing config key ${env.key} = ${result}`);
    return result;
}
