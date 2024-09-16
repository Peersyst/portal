import { HealthCheckResultDto } from "@shared/api";

export interface IHealthController {
    check(): Promise<HealthCheckResultDto>;
}
