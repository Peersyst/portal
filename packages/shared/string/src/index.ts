const wordPattern = new RegExp(["[A-Z][a-z]+", "[A-Z]+(?=[A-Z][a-z])", "[A-Z]+", "[a-z]+", "[0-9]+"].join("|"), "g");

/**
 * Splits a string into words.
 * @param string The string to split.
 * @param pattern The pattern to use.
 * @returns The words.
 */
export function toWords(string: string, pattern?: RegExp | string): string[] {
    if (pattern === undefined) {
        return wordPattern.exec(string) || [];
    }
    return wordPattern.exec(string) || [];
}

/**
 * Converts the first character of a string to uppercase.
 * @param string The string to convert.
 * @returns The string with the first character converted to uppercase.
 */
export function upperFirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts the first character of a string to uppercase.
 * @param string The string to convert.
 * @returns The string with the first character converted to uppercase.
 */
export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase.
 * @param string The string to convert.
 * @returns The camelCase string.
 */
export function camelCase(string: string): string {
    return toWords(string)
        .map((word, index) => (index === 0 ? word.toLowerCase() : upperFirst(word.toLowerCase())))
        .join("");
}

type EllipsizeOptions = { ellipsis: "start" | "middle" | "end"; length?: number | [number, number] };

/**
 * Ellipsizes a string.
 * @param string The string to ellipsize.
 * @param options The options to use.
 * @returns The ellipsized string.
 */
export function ellipsize(string: string, options?: EllipsizeOptions): string {
    const { ellipsis = "middle", length: lengths } = options || {};

    const strLength = string.length;
    if (!lengths) return string;

    const [leftLength, rightLength] = Array.isArray(lengths) ? lengths : [lengths, lengths];

    if (ellipsis === "middle") {
        if (strLength <= leftLength + rightLength) return string;
        return string.substring(0, leftLength) + "..." + string.substring(strLength - rightLength, strLength);
    } else if (ellipsis === "end") {
        if (strLength <= leftLength) return string;
        return string.substring(0, leftLength) + "...";
    } else {
        if (strLength <= rightLength) return string;
        return "..." + string.substring(strLength - rightLength, rightLength);
    }
}
