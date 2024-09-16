import { Col, Typography, useTheme } from "@peersyst/react-components";
import { cx } from "@peersyst/react-utils";
import { SearchNotFoundIcon } from "./nothing-to-show.styles";
import { useTranslate } from "@frontend/locale/react";
import { NothingToShowProps } from "./nothing-to-show.types";

export const NothingToShow = ({
    className,
    style,
    label,
    icon = <SearchNotFoundIcon />,
    showIcon = true,
    showLabel = true,
}: NothingToShowProps): JSX.Element => {
    const { spacing } = useTheme();
    const translate = useTranslate();

    return (
        <Col
            className={cx("nothing-to-show", className)}
            style={style}
            flex={1}
            alignItems="center"
            justifyContent="center"
            gap={spacing[5]}
        >
            {showIcon && icon}
            {showLabel && (
                <Typography variant="h6Regular" textAlign="center">
                    {label || translate("searchNotFound")}
                </Typography>
            )}
        </Col>
    );
};
