import { OpenAPI } from "./service";
import { config } from "../../common/config";

OpenAPI.TOKEN = async () => /*(await AuthTokenStorage.get()) || */ "";
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.BASE = config.backendUrl;
OpenAPI.CREDENTIALS = "omit";
