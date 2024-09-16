import styled from "styled-components";

export const FooterLinkRoot = styled.a(({ theme }) => ({
    display: "flex",
    color: theme.palette.placeholder,
    svg: {
        color: theme.palette.placeholder,
        width: "1rem",
        height: "auto",
    },
    "&:hover": {
        opacity: 0.8,
    },
    cursor: "pointer",
    gap: theme.spacing[2],
}));
