import { useContext } from "react";
import { IConfigManager } from "../interfaces";
import { ConfigManagerContext } from "../context";

export function useConfigManagerContext(): IConfigManager | undefined {
    return useContext(ConfigManagerContext);
}
