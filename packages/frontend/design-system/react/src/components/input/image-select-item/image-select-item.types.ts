import { CSSProperties, ReactElement } from "react";

export type ImageSelectItemProps = {
    src: string | undefined;
    alt?: string;
    label: string | ReactElement;
    style?: CSSProperties;
    className?: string;
};
