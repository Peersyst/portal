import { Col } from "@frontend/design-system-react/col";
import styled from "styled-components";

export const MetamaskConnectionRoot = styled(Col).attrs({ alignItems: "center", justifyContent: "center", gap: "0.25rem" })`
    padding: 1rem;
`;

export const MetamaskConnectionLogo = styled.img`
    width: 10rem;
    height: 10rem;
    filter: grayscale(100%);
    opacity: 0.5;
`;
