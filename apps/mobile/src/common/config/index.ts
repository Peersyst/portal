import { AWSConfigProvider, ConfigManager, IConfigManager, ReactNativeAsyncConfigStorage } from "@peersyst/config";
import staticConfig from "./static";

const configProvider = new AWSConfigProvider();
const configStorage = new ReactNativeAsyncConfigStorage();

// Interfaces are useful so the app does not depend on the `config-manager` implementation.
export const configManager: IConfigManager = new ConfigManager(configProvider, configStorage, staticConfig);
