export function getEnv() {
    try {
        return process.env;
    } catch (error) {
        try {
            return (import.meta as any).env;
        } catch (error) {
            throw new Error("No process or import.meta found");
        }
    }
}
