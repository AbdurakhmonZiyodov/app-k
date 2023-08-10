/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {ActivityType} from './ActivityType';
import type {Reward} from './Reward';

export type ActivityBase = {
  type: ActivityType;
  id: string;
  summary: string;
  backgroundColor: string;
  companyId: string;
  endDateTime?: string;
  reward?: Reward;
};
