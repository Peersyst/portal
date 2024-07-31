import { Query, ValidationPipe } from "@nestjs/common";

/**
 * Enables validation and transformation of the query object
 */
export const EnhancedQuery = () =>
    Query(
        new ValidationPipe({
            transform: true,
            transformOptions: { enableImplicitConversion: true },
            forbidNonWhitelisted: true,
        }),
    );
