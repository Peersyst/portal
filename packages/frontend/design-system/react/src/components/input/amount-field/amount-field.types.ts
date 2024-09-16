import Amount from "@shared/amount";
import { NumericFieldProps } from "../numeric-field";

export type AmountFieldProps = NumericFieldProps & {
    balance?: Amount;
};

export type MaxAmountTypographyProps = {
    isValidAmount: boolean;
};
