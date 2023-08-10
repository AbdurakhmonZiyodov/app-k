/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {ActivityBase} from './ActivityBase';
import type {ActivityType} from './ActivityType';
import type {TaskStatus} from './TaskStatus';

export type TaskActivityBase = ActivityBase & {
  type?: ActivityType;
  status?: TaskStatus;
};
