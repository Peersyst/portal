import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { ProjectVersion } from "@shared/modules/health";
import { HealthController } from "../../domain/controllers/health.controller";

/**
 * Gets the project version query key.
 * @returns The project version query key.
 */
export function getProjectVersionQueryKey(): any[] {
    return ["app-version"];
}

/**
 * Gets the project version.
 * @returns A query result with the project version.
 */
export function useGetProjectVersion(): UseQueryResult<ProjectVersion> {
    const queryKey = getProjectVersionQueryKey();

    return useQuery({
        queryKey,
        queryFn: async () => {
            const backendVersion = await getInstance(HealthController).check();

            return {
                backend: backendVersion.version,
                frontend: process.env.VERSION,
            };
        },
    });
}
