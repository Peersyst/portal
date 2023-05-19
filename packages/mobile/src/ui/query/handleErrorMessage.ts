import { en } from "ui/locale/locales/en/en";

export interface HandleApiErrorMessageResult {
    message: string;
    type: "error" | "warning";
}

export type UseHandleErrorMessage = (error: any | any) => HandleApiErrorMessageResult;

export function handleErrorMessage(error: any | any, translate: any): HandleApiErrorMessageResult {
    const code = error.body?.statusCode || error.status;
    const message = error.body?.message || error.statusText;
    if (!code || code === 500) return { message: translate("somethingWentWrong"), type: "error" };
    else if (code === 401) return { message: translate("sessionExpired"), type: "warning" };
    else return { message: translate(message in en.error ? error.body.message : "somethingWentWrong"), type: "error" };
}
