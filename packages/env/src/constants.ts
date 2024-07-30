export const CONFIG_ENV = process.env.CONFIG_ENV || process.env.NODE_ENV;

export const IS_DEV = CONFIG_ENV === "development";

export const IS_TEST = CONFIG_ENV === "test";

export const IS_PROD = !IS_DEV && !IS_TEST;
