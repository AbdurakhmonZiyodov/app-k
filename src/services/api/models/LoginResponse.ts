/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {Login2faDetails} from './Login2faDetails';

export type LoginResponse = {
  accessToken?: string | null;
  newAccount?: boolean;
  required2Fa?: boolean;
  login2FaDetails?: Login2faDetails;
};
