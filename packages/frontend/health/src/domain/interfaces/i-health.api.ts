import { HealthCheckResultDto } from "@shared/api";

export interface IHealthApi {
    check(): Promise<HealthCheckResultDto>;
}
