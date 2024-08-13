/**
 * toWords
 */
const wordPattern = new RegExp(["[A-Z][a-z]+", "[A-Z]+(?=[A-Z][a-z])", "[A-Z]+", "[a-z]+", "[0-9]+"].join("|"), "g");
String.prototype.toWords = function (this: string, pattern?: RegExp | string) {
    if (pattern === undefined) {
        return this.match(wordPattern) || [];
    }
    return this.match(pattern) || [];
};

/**
 * upperFirst
 */
String.prototype.upperFirst = function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * capitalize
 */
String.prototype.capitalize = function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

/**
 * toCamelCase
 */
String.prototype.toCamelCase = function (this: string) {
    return this.toWords()
        .map((word, index) => (index === 0 ? word.toLowerCase() : word.toLowerCase().upperFirst()))
        .join("");
};

/**
 * abbreviate
 */
String.prototype.ellipsize = function (
    this: string,
    options?: { ellipsis: "start" | "middle" | "end"; length?: number | [number, number] },
) {
    const { ellipsis = "middle", length: lengths } = options || {};

    const strLength = this.length;
    if (!lengths) return this;

    const [leftLength, rightLength] = Array.isArray(lengths) ? lengths : [lengths, lengths];

    if (ellipsis === "middle") {
        if (strLength <= leftLength + rightLength) return this;
        return this.substring(0, leftLength) + "..." + this.substring(strLength - rightLength, strLength);
    } else if (ellipsis === "end") {
        if (strLength <= leftLength) return this;
        return this.substring(0, leftLength) + "...";
    } else {
        if (strLength <= rightLength) return this;
        return "..." + this.substring(strLength - rightLength, rightLength);
    }
};

export {};
