import { RowProps } from "@peersyst/react-components";
import Amount from "@shared/amount";

export interface AmountDisplayProps extends RowProps {
    amount: Amount;
    hideCurrency?: boolean;
}
