import { useControlled } from "@peersyst/react-hooks";
import { BridgeSource } from "xchain-sdk";
import { BridgeOriginAmountFieldProps } from "./bridge-origin-amount-field.types";
import clsx from "clsx";
import { BridgeOriginAmountTextField } from "./bridge-otigin-amount-field.styles";
import { Col } from "@frontend/design-system-react/col";
import { Row } from "@frontend/design-system-react/row";
import { useGetSourceWalletBalance } from "@frontend/bridge/ui/queries";
import { BridgeOriginTokenSelector } from "../bridge-origin-token-selector/bridge-origin-token-selector";

export function BridgeOriginAmountField({
    style,
    className,
    disabled = false,
    defaultValue = "",
    value: valueProp,
    onChange: onChangeProp,
    ...rest
}: BridgeOriginAmountFieldProps): JSX.Element {
    const [value, setValue] = useControlled(defaultValue, valueProp, onChangeProp);
    const { data: originWalletBalance } = useGetSourceWalletBalance(BridgeSource.ORIGIN);
    const loadingOriginWalletBalance = originWalletBalance === undefined;

    return (
        <Row style={style} className={clsx("BridgeOriginAmountField", className)}>
            <Col flex={1}>
                <BridgeOriginAmountTextField
                    balance={loadingOriginWalletBalance ? undefined : originWalletBalance}
                    value={value}
                    onChange={setValue}
                    disabled={disabled || loadingOriginWalletBalance}
                    validators={{ gt: 0 }}
                    error={loadingOriginWalletBalance} // Disables form while loading balance. Error is not shown since it is also being disabled.
                    // TODO: Restore
                    //suffix={loadingOriginWalletBalance ? <Loader /> : <BridgeOriginTokenSelector />}
                    suffix={<BridgeOriginTokenSelector />}
                    maxDecimals={originWalletBalance?.decimals}
                    {...rest}
                />
            </Col>
        </Row>
    );
}
