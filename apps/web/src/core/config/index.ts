import { ConfigManager, IConfigManager } from "@frontend/config";
import { LocalStorageConfigStorage } from "@frontend/config/browser";
import { AWSConfigProvider } from "@frontend/config/providers";
import staticConfig from "./static";

const configProvider = new AWSConfigProvider();
const configStorage = new LocalStorageConfigStorage();

// Interfaces are useful so the app does not depend on the `config-manager` implementation.
export const configManager: IConfigManager = new ConfigManager(configProvider, configStorage, staticConfig);
