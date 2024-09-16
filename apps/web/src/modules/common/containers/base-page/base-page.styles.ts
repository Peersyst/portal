import styled, { css } from "styled-components";
import { Col } from "@frontend/design-system-react/col";
import { bg_bottom, bg_bottom_mobile, bg_top } from "../../../../assets/images";

export const BasePageWrapper = styled(Col)`
    padding: 0 var(--base-page-padding) var(--base-page-padding);
`;

export const BasePageRoot = styled(Col)(
    ({ theme }) => css`
        position: relative;
        row-gap: 1rem;
        min-height: 100vh;

        ${theme.breakpoints.down("md")} {
            row-gap: 2rem;
        }
    `,
);

export const Background = styled.img(
    ({ theme }) => css`
        position: absolute;
        z-index: -1;

        ${theme.breakpoints.down("sm")} {
            display: none;
        }
    `,
);

export const MobileBackground = styled(Background).attrs({ src: bg_top })(
    ({ theme }) => css`
        display: none;

        ${theme.breakpoints.down("sm")} {
            display: block;
        }
    `,
);

export const TopBackground = styled(Background).attrs({ src: bg_top })`
    left: 0;
    top: 0;
    width: 25vw;
`;

export const BottomBackground = styled(Background).attrs({ src: bg_bottom })`
    right: 0;
    bottom: 0;
    width: 15vw;
`;

export const MobileBottomBackground = styled(MobileBackground).attrs({ src: bg_bottom_mobile })`
    right: 0;
    bottom: 0;
    width: 15rem;
`;
