import { useGetProjectVersion } from "@frontend/health/ui/queries";
import { ProjectVersionIcon, ProjectVersionRoot } from "./project-version.styles";
import { Typography } from "@frontend/design-system-react/typography";

export function ProjectVersion(): JSX.Element {
    const { data: projectVersion } = useGetProjectVersion();

    return (
        <ProjectVersionRoot>
            <ProjectVersionIcon />
            <Typography variant="body2Regular" color="placeholder">
                {`Backend ${projectVersion?.backend}, Frontend ${projectVersion?.frontend}`}
            </Typography>
        </ProjectVersionRoot>
    );
}
