/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { XummPayloadApplicationDto } from './XummPayloadApplicationDto';
import type { XummPayloadMetaDto } from './XummPayloadMetaDto';
import type { XummPayloadPayloadDto } from './XummPayloadPayloadDto';
import type { XummPayloadResponseDto } from './XummPayloadResponseDto';

export type XummPayloadDto = {
    meta: XummPayloadMetaDto;
    application: XummPayloadApplicationDto;
    payload: XummPayloadPayloadDto;
    response: XummPayloadResponseDto;
    custom_meta: Record<string, any>;
};

