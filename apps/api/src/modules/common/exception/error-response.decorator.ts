import { ApiExtraModels } from "@nestjs/swagger";
import { applyDecorators } from "@nestjs/common";
import { ApiException } from "@backend/core/exceptions";

export function ApiErrorDecorators(): ClassDecorator {
    return applyDecorators(ApiExtraModels(ApiException));
}
