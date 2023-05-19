import { config } from "../../common/config";
import { OpenAPI } from "./service";

OpenAPI.TOKEN = async () => /*((await RepositoryFactory.authTokenRepository.getToken())!*/ "";
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.BASE = config.backendUrl;
OpenAPI.CREDENTIALS = "omit";
