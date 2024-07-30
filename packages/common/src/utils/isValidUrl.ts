import validator from "validator";

/**
 * Checks if the given url is valid
 * @param url Url to check
 */
export async function isValidUrl(url: string): Promise<boolean> {
    if (validator.isURL(url)) {
        try {
            await fetch(url, {
                method: "GET",
                mode: "no-cors",
            });
            return true;
        } catch (_e) {
            return false;
        }
    } else {
        return false;
    }
}
