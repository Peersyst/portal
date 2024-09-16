import { useTheme } from "../../../../themes/common/hooks";
import { Skeleton, SkeletonProps } from "../../../feedback/skeleton";
import { Row } from "../../../layout/row";
import { Typography } from "../../typography";

export function TokenSelectorListItemSkeleton({
    className,
    style,
    ...skeletonProps
}: Omit<SkeletonProps, "shape" | "width" | "height" | "children">): JSX.Element {
    const { spacing } = useTheme();

    return (
        <Row alignItems="center" gap={spacing[3]} className={className} style={style}>
            <Skeleton shape="circular" {...skeletonProps} width="1.75rem" height="1.75rem" />
            <Skeleton width="15%" {...skeletonProps}>
                <Typography variant="body1Regular">·</Typography>{" "}
            </Skeleton>
        </Row>
    );
}
