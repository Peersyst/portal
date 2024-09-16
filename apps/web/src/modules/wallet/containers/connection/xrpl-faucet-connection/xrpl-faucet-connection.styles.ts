import { Col } from "@frontend/design-system-react/col";
import styled from "styled-components";

export const XrplFaucetConnectionRoot = styled(Col).attrs({ alignItems: "center", justifyContent: "center", gap: "1rem" })`
    padding: 1rem;
`;

export const XrplFaucetConnectionLoader = styled.img`
    width: 8.5rem;
    height: 8.5rem;
`;
