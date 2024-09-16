import clsx from "clsx";
import { GroupDetailProps } from "./group-detail.types";
import { Row } from "../row";
import { GroupLabel } from "../group-label";
import { Typography } from "../../display/typography";
import { Loader } from "../../feedback/loader";

export function GroupDetail({ label, value, complement, isLoading = false, style, className }: GroupDetailProps): JSX.Element {
    const labelElement = complement ? (
        <Row alignItems="center" gap="0.25rem">
            {label}
            {complement}
        </Row>
    ) : (
        label
    );

    return (
        <GroupLabel placement="left" label={labelElement} gap="0.5rem" style={style} className={clsx("GroupLabel", className)}>
            <Typography variant="caption1Regular" color="grey.200">
                {isLoading ? <Loader /> : value}
            </Typography>
        </GroupLabel>
    );
}
