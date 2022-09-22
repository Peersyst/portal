import { getNestTypeORMConfig } from "./typeorm.config";
import loadAwsSecrets from "./util/loadAwsSecrets";
import serverConfig from "./server.config";

export default async (): Promise<any> => {
    const secrets = await loadAwsSecrets(process.env.AWS_REGION, process.env.AWS_SECRET_ID);
    return {
        server: serverConfig(secrets),
        database: getNestTypeORMConfig(secrets),
        logger: {
            logLevel: "info",
            logFileName: "logs/app.log",
        },
    };
};
