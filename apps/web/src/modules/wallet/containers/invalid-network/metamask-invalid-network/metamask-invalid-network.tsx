import { useTranslate } from "@frontend/locale/react";
import { InvalidNetworkProps } from "../invalid-network.types";
import { MetamaskInvalidNetworkImg, MetamaskInvalidNetworkRoot } from "./metamask-invalid-network.styles";
import { metamask_invalid_network } from "../../../../../assets/images";
import { Typography } from "@frontend/design-system-react/typography";

export function MetamaskInvalidNetwork({ switchToNetwork, chain }: InvalidNetworkProps): JSX.Element {
    const translate = useTranslate();
    return (
        <MetamaskInvalidNetworkRoot>
            <MetamaskInvalidNetworkImg src={metamask_invalid_network} />
            <Typography variant="body1Regular" textAlign="center">
                {`${translate("please")}, `}
                <a css={{ cursor: "pointer" }} onClick={switchToNetwork}>
                    {translate("switchMetamaskNetwork", { network: chain.name })}
                </a>
            </Typography>
        </MetamaskInvalidNetworkRoot>
    );
}
