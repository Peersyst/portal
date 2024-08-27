import { defineConfig as tsupDefineConfig, Options as TsupOptions } from "tsup";
import { spawnSync } from "child_process";

export type Options = Omit<TsupOptions, "onSuccess"> & {
    onSuccess?: Exclude<TsupOptions["onSuccess"], string>;
};

export function defineConfig(cliFn: (options: Options) => ReturnType<typeof tsupDefineConfig>) {
    return function mergedCliFn({ dts = false, onSuccess, ...restOptions }: Options): ReturnType<typeof tsupDefineConfig> {
        return cliFn({
            ...restOptions,
            async onSuccess() {
                if (dts) {
                    console.log("\x1b[34m%s\x1b[0m", "TSC", "Building declaration files...");
                    spawnSync("npx", ["tsc", "--project", "./tsconfig.build.json", "--emitDeclarationOnly", "--declaration"]);
                    console.log("\x1b[34m%s\x1b[0m", "TSC", "⚡️ Build success");
                }
                return onSuccess?.();
            },
        });
    };
}
