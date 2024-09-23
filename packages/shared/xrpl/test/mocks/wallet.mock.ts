import { mockify } from "@shared/test";
import { Wallet } from "xrpl";

export const WalletMock = mockify<Wallet>({ address: "address" });
