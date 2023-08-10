/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {TaskActivityBase} from './TaskActivityBase';
import type {VotingActivityBase} from './VotingActivityBase';

export type ActivityBasePage = {
  items?: Array<TaskActivityBase | VotingActivityBase> | null;
  pageNumber?: number;
  pageSize?: number;
};
