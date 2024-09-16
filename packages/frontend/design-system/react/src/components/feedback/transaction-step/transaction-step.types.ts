import { Transaction } from "xchain-sdk";
import { ActionStepProps, ActionStepSubtitle } from "../action-step";
import { ChainDto } from "@shared/api";

export type TransactionStepProps = Omit<ActionStepProps, "Icon" | "subtitle"> & {
    subtitle: Omit<ActionStepSubtitle, "success">;
    address: string;
    chain: ChainDto;
    transaction?: Transaction;
};
