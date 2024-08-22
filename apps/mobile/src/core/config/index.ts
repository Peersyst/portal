import { ConfigManager, IConfigManager } from "@frontend/config";
import { ReactNativeAsyncConfigStorage } from "@frontend/config/react-native";
import { AWSConfigProvider } from "@frontend/config/providers";
import staticConfig from "./static";

const configProvider = new AWSConfigProvider();
const configStorage = new ReactNativeAsyncConfigStorage();

// Interfaces are useful so the app does not depend on the `config-manager` implementation.
export const configManager: IConfigManager = new ConfigManager(configProvider, configStorage, staticConfig);
