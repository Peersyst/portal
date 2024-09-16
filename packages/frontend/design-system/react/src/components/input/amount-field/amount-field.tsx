import clsx from "clsx";
import { AmountFieldProps } from "./amount-field.types";
import { useTranslate } from "@frontend/locale/react";
import { useFormatAmount } from "@frontend/misc/ui/amount/react";
import { useControlled } from "@peersyst/react-hooks";
import Amount from "@shared/amount";
import { Col } from "../../layout/col";
import { NumericField } from "../numeric-field";
import { MaxAmountTypography } from "./amount-field.styles";

export function AmountField({
    balance: balanceProp,
    style,
    className,
    defaultValue = "",
    value: valueProp,
    onChange: onChangeProp,
    error = false,
    maxDecimals,
    ...rest
}: AmountFieldProps): JSX.Element {
    const translate = useTranslate();
    const formatAmount = useFormatAmount();

    const [value, setValue] = useControlled(defaultValue, valueProp, onChangeProp);

    const balance = balanceProp
        ? balanceProp.gt("0")
            ? balanceProp
            : new Amount("0", balanceProp.decimals, balanceProp.currency)
        : undefined;
    const isValidAmount = !value || !balance || balance.canPay(value);

    const handleLoadMax = () => {
        setValue(balance!.formatAmount());
    };

    return (
        <Col style={style} className={clsx("AmountField", className)} gap={12}>
            <NumericField
                error={error || !isValidAmount}
                value={value}
                onChange={setValue}
                maxDecimals={maxDecimals || balance?.decimals}
                {...rest}
            />
            {balance !== undefined && (
                <MaxAmountTypography variant="caption2Regular" isValidAmount={isValidAmount} onClick={handleLoadMax}>{`${translate(
                    "sendMax",
                )}: ${formatAmount(balance)}`}</MaxAmountTypography>
            )}
        </Col>
    );
}
