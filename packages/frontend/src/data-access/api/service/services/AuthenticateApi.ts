/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthCredentialsDto } from '../models/AuthCredentialsDto';
import type { LoginRequest } from '../models/LoginRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticateApi {

    /**
     * Authenticate user with email
     * @param requestBody
     * @returns AuthCredentialsDto
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequest,
    ): CancelablePromise<AuthCredentialsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
