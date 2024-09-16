import styled from "styled-components";
import { Svg } from "@frontend/design-system-react/svg";

export const LogoRoot = styled(Svg)(({ theme }) => ({
    color: theme.palette.text,
    width: "9rem",
    height: "auto",
}));
