/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {ActivityBasePage} from '../models/ActivityBasePage';
import type {ActivityType} from '../models/ActivityType';
import type {IdResponse} from '../models/IdResponse';
import type {TaskActivityBase} from '../models/TaskActivityBase';
import type {TaskSubmissionRequest} from '../models/TaskSubmissionRequest';
import type {VotingActivityBase} from '../models/VotingActivityBase';

import type {CancelablePromise} from '../core/CancelablePromise';
import {OpenAPI} from '../core/OpenAPI';
import {request as __request} from '../core/request';

export class ActivityService {
  /**
   * @param type
   * @param company
   * @param version The requested API version
   * @returns ActivityBasePage Success
   * @throws ApiError
   */
  public static getActivities(
    type?: Array<ActivityType>,
    company?: Array<string>,
    version: string = '1.0',
  ): CancelablePromise<ActivityBasePage> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Activity',
      path: {
        version: version,
      },
      query: {
        Type: type,
        Company: company,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @param id
   * @param version The requested API version
   * @returns any Success
   * @throws ApiError
   */
  public static getApiVActivity(
    id: string,
    version: string = '1.0',
  ): CancelablePromise<TaskActivityBase | VotingActivityBase> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Activity/{id}',
      path: {
        id: id,
        version: version,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
      },
    });
  }

  /**
   * @param id
   * @param version The requested API version
   * @returns TaskActivityBase Success
   * @throws ApiError
   */
  public static getApiVActivityTask(
    id: string,
    version: string = '1.0',
  ): CancelablePromise<TaskActivityBase> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v{version}/Activity/Task/{id}',
      path: {
        id: id,
        version: version,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
      },
    });
  }

  /**
   * @param id
   * @param version The requested API version
   * @param formData
   * @returns IdResponse Success
   * @throws ApiError
   */
  public static postApiVActivityTaskAttachment(
    id: string,
    version: string = '1.0',
    formData?: {
      FileName?: string;
      File?: Blob;
    },
  ): CancelablePromise<IdResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Activity/Task/{id}/Attachment',
      path: {
        id: id,
        version: version,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
        409: `Conflict`,
      },
    });
  }

  /**
   * @param id
   * @param version The requested API version
   * @param requestBody
   * @returns IdResponse Success
   * @throws ApiError
   */
  public static postApiVActivityTaskSubmission(
    id: string,
    version: string = '1.0',
    requestBody?: TaskSubmissionRequest,
  ): CancelablePromise<IdResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v{version}/Activity/Task/{id}/Submission',
      path: {
        id: id,
        version: version,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
        409: `Conflict`,
      },
    });
  }
}
