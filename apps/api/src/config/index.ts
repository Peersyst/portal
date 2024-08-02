import { getNestTypeORMConfig } from "./typeorm.config";
import serverConfig from "./server.config";
import loggerConfig from "./logger.config";
import { loadAwsSecrets } from "@peersyst/env-config";

export default async (): Promise<any> => {
    const secrets = await loadAwsSecrets(process.env.AWS_REGION, process.env.AWS_SECRET_ID);
    return {
        server: serverConfig(secrets),
        database: getNestTypeORMConfig(secrets),
        logger: loggerConfig(),
    };
};
