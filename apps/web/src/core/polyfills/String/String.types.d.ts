import "./String";

declare global {
    interface String {
        toWords(pattern?: RegExp | string): string[];
        upperFirst(): string;
        capitalize(): string;
        toCamelCase(): string;
        ellipsize(options?: { ellipsis?: "start" | "middle" | "end"; length?: number | [number, number] }): string;
    }
}
