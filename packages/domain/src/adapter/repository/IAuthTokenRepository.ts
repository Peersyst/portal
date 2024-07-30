export interface IAuthTokenRepository {
    getToken(): Promise<string | undefined>;
    setToken(token: string): Promise<void>;
    removeToken(): Promise<void>;
}
