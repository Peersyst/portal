import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";

export type AwsSecrets = Record<string, any>;

let loaded = false;

export async function waitForAwsSecrets(): Promise<void> {
    while (!loaded) {
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
}

export async function loadAwsSecrets(region: string, SecretId: string): Promise<Record<string, string>> {
    try {
        const client = new SecretsManagerClient({ region: region });
        const secrets = await client.send(
            new GetSecretValueCommand({
                SecretId,
            }),
        );
        loaded = true;
        return JSON.parse(secrets.SecretString);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Could not load config AWS secrets: " + e);
        loaded = true;
        return {};
    }
}
