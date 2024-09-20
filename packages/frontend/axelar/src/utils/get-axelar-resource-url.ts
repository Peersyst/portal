/**
 * Get the image URL from the Axelar chain.
 * @param resourceUrl The resource URL.
 * @param axelarUrl The Axelar URL.
 * @returns The image URL.
 */
export function getAxelarResourceUrl(resourceUrl: string, axelarUrl: string): string {
    return resourceUrl.startsWith("/") ? `${axelarUrl}/${resourceUrl}` : resourceUrl;
}
