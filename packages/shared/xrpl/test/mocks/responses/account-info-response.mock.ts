import { mockify } from "@shared/test";
import { AccountInfoResponse } from "xrpl";

export const AccountInfoResponseMock = mockify<AccountInfoResponse>({
    result: {
        account_data: {
            OwnerCount: 1,
        },
    },
});
