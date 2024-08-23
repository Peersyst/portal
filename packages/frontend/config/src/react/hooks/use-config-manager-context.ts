import { useContext } from "react";
import { ConfigManagerContext } from "../context";
import { IConfigManager } from "../../core/interfaces";

export function useConfigManagerContext(): IConfigManager | undefined {
    return useContext(ConfigManagerContext);
}
