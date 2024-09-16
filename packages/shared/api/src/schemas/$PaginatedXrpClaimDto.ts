/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedXrpClaimDto = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'XrpClaimDto',
            },
            isRequired: true,
        },
        pages: {
            type: 'number',
            isRequired: true,
        },
        currentPage: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
