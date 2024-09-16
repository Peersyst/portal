import { useTranslate } from "@frontend/locale/react";
import { XrplFaucetConnectionLoader, XrplFaucetConnectionRoot } from "./xrpl-faucet-connection.styles";
import { xrp_loader } from "../../../../../assets/images";
import { ClockCallout } from "@frontend/design-system-react/clock-callout";

export function XrplFaucetConnection(): JSX.Element {
    const translate = useTranslate();

    return (
        <XrplFaucetConnectionRoot>
            <XrplFaucetConnectionLoader src={xrp_loader} />
            <ClockCallout message={translate("thisMightTakeAFewMinutes")} />
        </XrplFaucetConnectionRoot>
    );
}
