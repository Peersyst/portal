import { CreateConfig } from "@peersyst/react-components";
import { ArrowButton } from "../components/input/arrow-button/arrow-button";
import { ExpandableIcon } from "../components/display/expandable/expandable-icon/expandable-icon";

export const dsConfig: Partial<CreateConfig> = {
    components: {
        Button: {
            defaultProps: {
                variant: "primary",
                size: "lg",
            },
        },
        Carousel: {
            defaultProps: {
                leftArrow: <ArrowButton direction="left" />,
                rightArrow: <ArrowButton direction="right" />,
                renderArrows: true,
                gap: 24,
            },
        },
        Chip: {
            defaultProps: {
                variant: "outlined",
                rounded: true,
            },
        },
        Popover: {
            defaultProps: {
                arrow: true,
                position: "top",
            },
        },
        Toast: {
            defaultProps: {
                position: "bottom-right",
            },
        },
        Skeleton: {
            defaultProps: {
                animation: "pulse",
            },
        },
        TextInput: {
            defaultProps: {
                errorElement: false,
            },
        },
        ExpandableDisplay: {
            defaultProps: {
                ExpandComponent: ExpandableIcon,
            },
        },
    },
};
