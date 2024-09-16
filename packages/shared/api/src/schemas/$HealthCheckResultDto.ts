/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HealthCheckResultDto = {
    properties: {
        details: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        error: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        info: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        status: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        version: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
