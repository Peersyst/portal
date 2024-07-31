export type BaseProviderConfig = {
    /**
     * The minimum version the provider config is compatible with.
     */
    minVersion?: number;
};

export type BaseConfig = BaseProviderConfig & {
    /**
     * Version of the config.
     */
    version: number;
};
