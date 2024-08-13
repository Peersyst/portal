import { configManager } from "@/core/config";
import { OpenAPI } from "@shared/api";

// import RepositoryFactory from "@/domain/adapter/RepositoryFactory";

OpenAPI.TOKEN = async () => /*(awaitRepositoryFactory.authRepository.getToken())! || */ "";
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.CREDENTIALS = "omit";

// Set dynamic OpenAPI config attributes
configManager.on("load", (config) => {
    OpenAPI.BASE = config.backendUrl;
});
