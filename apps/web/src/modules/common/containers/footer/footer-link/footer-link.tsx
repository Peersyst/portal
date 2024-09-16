import { FooterLinkProps } from "./footer-link.types";
import { FooterLinkRoot } from "./footer-link.styles";
import { Typography } from "@frontend/design-system-react/typography";

export function FooterLink({ href, label, Icon }: FooterLinkProps): JSX.Element {
    return (
        <FooterLinkRoot href={href} target="_blank" rel="noreferrer">
            {Icon && <Icon />}
            <Typography variant="body2Regular">{label}</Typography>
        </FooterLinkRoot>
    );
}
