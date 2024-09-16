import { Col } from "@frontend/design-system-react/col";
import styled, { css } from "styled-components";
import { TokenSelectorList } from "@frontend/design-system-react/token-selector-list";

export const BridgeTokenSelectorRoot = styled(Col)`
    height: 100%;
    overflow: hidden;
`;

export const BridgeTokenSelectorList = styled(TokenSelectorList)(
    ({ theme }) => css`
        flex: 1;
        padding: ${theme.spacing[6]} 0;
        overflow: auto;
    `,
);
