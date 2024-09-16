import styled, { css } from "styled-components";
import { Form } from "@frontend/design-system-react/form";

export const BridgeFormRoot = styled(Form)(
    () => css`
        padding: 2rem;
    `,
);
