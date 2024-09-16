/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XummPayloadDto = {
    properties: {
        meta: {
            type: 'XummPayloadMetaDto',
            isRequired: true,
        },
        application: {
            type: 'XummPayloadApplicationDto',
            isRequired: true,
        },
        payload: {
            type: 'XummPayloadPayloadDto',
            isRequired: true,
        },
        response: {
            type: 'XummPayloadResponseDto',
            isRequired: true,
        },
        custom_meta: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
    },
} as const;
