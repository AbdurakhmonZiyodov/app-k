/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {CompanyBasePage} from '../models/CompanyBasePage';

import type {CancelablePromise} from '../core/CancelablePromise';
import {OpenAPI} from '../core/OpenAPI';
import {request as __request} from '../core/request';

export class CompanyService {
  /**
   * @param id
   * @param version The requested API version
   * @returns CompanyBasePage Success
   * @throws ApiError
   */
  public static getCompanies(
    id?: Array<string>,
    version: string = '1.0',
  ): CancelablePromise<CompanyBasePage> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Company',
      path: {
        version: version,
      },
      query: {
        Id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
