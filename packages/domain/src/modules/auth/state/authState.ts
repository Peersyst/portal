import { createState } from "../../../state";

export interface IAuthState {
    isLoggedIn: boolean;
}

export const defaultAuthState: IAuthState = { isLoggedIn: false };

export const createAuthState = () => createState<IAuthState>("auth-state", () => defaultAuthState);
