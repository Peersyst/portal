import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";

export default async (region: string, SecretId: string): Promise<Record<string, string>> => {
    const client = new SecretsManagerClient({ region: region });
    const secrets = await client.send(
        new GetSecretValueCommand({
            SecretId,
        }),
    );
    return JSON.parse(secrets.SecretString);
};
