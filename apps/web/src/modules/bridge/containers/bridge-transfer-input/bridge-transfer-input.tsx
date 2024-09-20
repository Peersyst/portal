import { useState } from "react";
import { BridgeTransferInputProps } from "./bridge-transfer-input.types";
import { useTranslate } from "@frontend/locale/react";
import { BridgeTransferInputRoot } from "./bridge-transfer-input.styles";
import { FormGroup } from "@frontend/design-system-react/form-group";
import { BridgeOriginAmountField } from "../bridge-origin-amount-field/bridge-origin-amount-field";
import { BridgeDestinationAmountField } from "../bridge-destination-amount-field/bridge-destination-amount-field";

function BridgeTransferInput({ name, required }: BridgeTransferInputProps): JSX.Element {
    const translate = useTranslate();

    const [amount, setAmount] = useState("");

    return (
        <BridgeTransferInputRoot>
            <FormGroup label={translate("youSend")}>
                <BridgeOriginAmountField label={translate("amount")} name={name} value={amount} onChange={setAmount} required={required} />
            </FormGroup>
            <FormGroup label={translate("youReceive")}>
                <BridgeDestinationAmountField label={translate("amount")} value={amount} />
            </FormGroup>
        </BridgeTransferInputRoot>
    );
}

export default BridgeTransferInput;
