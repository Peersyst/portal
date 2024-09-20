import { HealthCheckResultDto } from "@shared/api";
import { IHealthController } from "../../ui/interfaces/i-health.controller";
import { IHealthApi } from "../interfaces/i-health.api";
import { Controller } from "@frontend/core/domain/controller";

@Controller()
export class HealthController implements IHealthController {
    constructor(private readonly healthApi: IHealthApi) {}

    /**
     * Check the health of the application.
     * @returns The health check result.
     */
    check(): Promise<HealthCheckResultDto> {
        return this.healthApi.check();
    }
}
