import { CpuIcon } from "@frontend/design-system-react/icons";
import { Row } from "@frontend/design-system-react/row";
import styled from "styled-components";

export const ProjectVersionIcon = styled(CpuIcon)(({ theme }) => ({
    color: theme.palette.placeholder,
}));

export const ProjectVersionRoot = styled(Row)(({ theme }) => ({
    alignItems: "center",
    gap: theme.spacing[2],
}));
