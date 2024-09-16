import styled, { css } from "styled-components";
import { TextField } from "../text-field";

export const Searchbar = styled(TextField)(
    ({ theme }) => css`
        border-radius: ${theme.borderRadiusSm};
    `,
);
