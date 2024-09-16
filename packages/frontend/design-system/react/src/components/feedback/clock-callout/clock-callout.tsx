import { Row, Typography } from "@peersyst/react-components";
import { ClockCalloutProps } from "./clock-callout.types";
import { ClockIcon } from "./clock-callout.styles";

export function ClockCallout({ message, variant = "body1Regular", style, className }: ClockCalloutProps): JSX.Element {
    return (
        <Row gap="0.75rem" style={style} className={className}>
            <ClockIcon />
            <Typography variant={variant}>{message}</Typography>
        </Row>
    );
}
