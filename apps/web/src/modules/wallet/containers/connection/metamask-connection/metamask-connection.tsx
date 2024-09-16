import { useTranslate } from "@frontend/locale/react";
import { MetamaskConnectionLogo, MetamaskConnectionRoot } from "./metamask-connection.styles";
import { metamask } from "../../../../../assets/images";
import { ClockCallout } from "@frontend/design-system-react/clock-callout";

export function MetamaskConnection(): JSX.Element {
    const translate = useTranslate();

    return (
        <MetamaskConnectionRoot>
            <MetamaskConnectionLogo src={metamask} />
            <ClockCallout message={translate("waitingMetamaskSign")} />
        </MetamaskConnectionRoot>
    );
}
