import { configManager } from "@/common/config";
import { OpenAPI } from "@peersyst/apis";

// import RepositoryFactory from "@/domain/adapter/RepositoryFactory";

OpenAPI.TOKEN = async () => /*(awaitRepositoryFactory.authRepository.getToken())! || */ "";
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.CREDENTIALS = "omit";

// Set dynamic OpenAPI config attributes
configManager.on("load", (config) => {
    OpenAPI.BASE = config.backendUrl;
});
