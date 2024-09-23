import { mockify } from "@shared/test";
import { ServerInfoResponse } from "xrpl";

export const ServerInfoResponseMock = mockify<ServerInfoResponse>({
    result: {
        info: {
            validated_ledger: {
                age: 1,
                base_fee_xrp: 1,
                hash: "hash",
                reserve_base_xrp: 1,
                reserve_inc_xrp: 1,
                seq: 1,
            },
        },
    },
});
