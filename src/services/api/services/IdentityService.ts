/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {ExternalLoginRequest} from '../models/ExternalLoginRequest';
import type {LoginRequest} from '../models/LoginRequest';
import type {LoginResponse} from '../models/LoginResponse';
import type {RegisterEmailReply} from '../models/RegisterEmailReply';
import type {RegisterEmailRequest} from '../models/RegisterEmailRequest';
import type {RenewTokenRequest} from '../models/RenewTokenRequest';

import type {CancelablePromise} from '../core/CancelablePromise';
import {OpenAPI} from '../core/OpenAPI';
import {request as __request} from '../core/request';

export class IdentityService {
  /**
   * @param version The requested API version
   * @param requestBody
   * @returns LoginResponse Success
   * @throws ApiError
   */
  public static login(
    version: string = '1.0',
    requestBody?: LoginRequest,
  ): CancelablePromise<LoginResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/Login',
      path: {
        version: version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param version The requested API version
   * @param requestBody
   * @returns RegisterEmailReply Success
   * @throws ApiError
   */
  public static registerEmail(
    version: string = '1.0',
    requestBody?: RegisterEmailRequest,
  ): CancelablePromise<RegisterEmailReply> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/RegisterEmail',
      path: {
        version: version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        409: `Conflict`,
      },
    });
  }

  /**
   * @param version The requested API version
   * @param requestBody
   * @returns LoginResponse Success
   * @throws ApiError
   */
  public static externalLogin(
    version: string = '1.0',
    requestBody?: ExternalLoginRequest,
  ): CancelablePromise<LoginResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/ExternalLogin',
      path: {
        version: version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param version The requested API version
   * @returns void
   * @throws ApiError
   */
  public static logout(version: string = '1.0'): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/Logout',
      path: {
        version: version,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param version The requested API version
   * @param requestBody
   * @returns LoginResponse Success
   * @throws ApiError
   */
  public static renewToken(
    version: string = '1.0',
    requestBody?: RenewTokenRequest,
  ): CancelablePromise<LoginResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/RenewToken',
      path: {
        version: version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param userId
   * @param token
   * @param version The requested API version
   * @returns void
   * @throws ApiError
   */
  public static confirmEmail(
    userId: string,
    token: string,
    version: string = '1.0',
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Identity/ConfirmEmail',
      path: {
        version: version,
      },
      query: {
        userId: userId,
        token: token,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param email
   * @param version The requested API version
   * @returns any Accepted
   * @throws ApiError
   */
  public static resendConfirmationEmail(
    email: string,
    version: string = '1.0',
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/ResendConfirmationEmail',
      path: {
        version: version,
      },
      query: {
        email: email,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param phoneNumber
   * @param token
   * @param version The requested API version
   * @returns LoginResponse Success
   * @throws ApiError
   */
  public static confirmPhone(
    phoneNumber: string,
    token: string,
    version: string = '1.0',
  ): CancelablePromise<LoginResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Identity/ConfirmPhone',
      path: {
        version: version,
      },
      query: {
        phoneNumber: phoneNumber,
        token: token,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
