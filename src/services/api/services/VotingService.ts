/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {VotingsResponse} from '../models/VotingsResponse';

import type {CancelablePromise} from '../core/CancelablePromise';
import {OpenAPI} from '../core/OpenAPI';
import {request as __request} from '../core/request';

export class VotingService {
  /**
   * @param version The requested API version
   * @returns VotingsResponse Success
   * @throws ApiError
   */
  public static getVotings(
    version: string = '1.0',
  ): CancelablePromise<VotingsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Voting/GetVotings',
      path: {
        version: version,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param page
   * @param pageSize
   * @param version The requested API version
   * @returns VotingsResponse Success
   * @throws ApiError
   */
  public static getVotingsWithPagination(
    page: number = 1,
    pageSize: number = 20,
    version: string = '1.0',
  ): CancelablePromise<VotingsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Voting/GetVotingsWithPagination',
      path: {
        version: version,
      },
      query: {
        page: page,
        pageSize: pageSize,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param votingId
   * @param version The requested API version
   * @returns VotingsResponse Success
   * @throws ApiError
   */
  public static getVotingDescription(
    votingId?: string,
    version: string = '1.0',
  ): CancelablePromise<VotingsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Voting/GetVotingDescription',
      path: {
        version: version,
      },
      query: {
        votingId: votingId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
