/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {ActivityBase} from './ActivityBase';
import type {ActivityType} from './ActivityType';
import type {VotingStatus} from './VotingStatus';

export type VotingActivityBase = ActivityBase & {
  type?: ActivityType;
  status?: VotingStatus;
};
