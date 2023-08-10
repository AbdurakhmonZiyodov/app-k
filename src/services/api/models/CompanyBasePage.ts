/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {CompanyBase} from './CompanyBase';

export type CompanyBasePage = {
  items?: Array<CompanyBase> | null;
  pageNumber?: number;
  pageSize?: number;
};
