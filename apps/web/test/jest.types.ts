declare global {
    namespace jest {
        function mockModule<T = unknown>(
            moduleName: string,
            moduleFactory: () => T | Promise<T>,
            options?: {
                virtual?: boolean;
            },
        ): typeof jest;
    }
}

export {};
