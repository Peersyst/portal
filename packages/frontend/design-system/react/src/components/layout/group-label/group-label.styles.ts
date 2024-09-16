import styled from "styled-components";
import { Label } from "../../display/label";

export const GroupLabelRoot = styled(Label)(({ theme, placement }) => {
    const isVertical = placement === "top" || placement === "bottom";

    if (isVertical)
        return {
            ".Label": {
                position: "relative",
                color: theme.palette.grey[400],
            },
        };
    else
        return {
            ".Label": {
                position: "relative",
                color: theme.palette.text,
                fontWeight: 500,
            },
        };
});
