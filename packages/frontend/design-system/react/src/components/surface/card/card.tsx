import { useColor } from "@peersyst/react-components";
import { CardProps } from "./card.types";
import { CardRoot } from "./card.styles";

export function Card({ elevation = 0, color: colorProp = "white", square = false, ...rest }: CardProps): JSX.Element {
    const color = useColor(colorProp);

    return <CardRoot elevation={elevation} color={color!} square={square} {...rest} />;
}
