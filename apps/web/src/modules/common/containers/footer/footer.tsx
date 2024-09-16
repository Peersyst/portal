import { useTranslate } from "@frontend/locale/react";
import { FooterLinkProps } from "./footer-link/footer-link.types";
import { ExternalLinksWrapper, FooterRoot } from "./footer.styles";
import { Col } from "@frontend/design-system-react/col";
import { useTheme } from "@frontend/design-system-react/theme";
import { useConfig } from "@frontend/config/react";
import { DiscordLogoIcon, XLogoIcon, EnvelopeIcon } from "@frontend/design-system-react/icons";
import { Row } from "@frontend/design-system-react/row";
import { Typography } from "@frontend/design-system-react/typography";
import { PeersystLogo } from "@frontend/design-system-react/peersyst-logo";
import { FooterLink } from "./footer-link/footer-link";
import { ProjectVersion } from "../../../health/containers/project-version/project-version";

export function Footer(): JSX.Element {
    const translate = useTranslate();
    const { spacing } = useTheme();

    const { discord, x, featureRequest } = useConfig("footerLinks");

    const footerLinks: FooterLinkProps[] = [
        {
            href: discord,
            label: "Discord",
            Icon: DiscordLogoIcon,
        },
        {
            href: x,
            label: `@${x.split("/").pop()}`,
            Icon: XLogoIcon,
        },
        {
            href: featureRequest,
            label: translate("featureRequest"),
            Icon: EnvelopeIcon,
        },
    ];

    return (
        <FooterRoot>
            <Col flex={1} alignItems="center" gap={spacing[6]}>
                <Row alignItems="center" gap={spacing[2]}>
                    <Typography variant="body2Regular" light>
                        {translate("proudlyDevelopedBy")}
                    </Typography>
                    <PeersystLogo />
                </Row>
                <ExternalLinksWrapper gap={spacing[8]}>
                    {footerLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                    <ProjectVersion />
                </ExternalLinksWrapper>
            </Col>
        </FooterRoot>
    );
}
