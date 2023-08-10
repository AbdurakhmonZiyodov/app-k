import {NotificationPosition} from './Notification.types';

export const AUTOCLOSE_TIME = 1000 * 4;

const ANIMATION_DURATION = 345;
const HIDDEN = -150;
const OPEN = 84;

export const ANIMATION_VALUES = {
  [NotificationPosition.SMALL]: {
    translateY: {
      from: HIDDEN,
      to: OPEN,
    },
    opacity: {from: 0, to: 1},
    duration: ANIMATION_DURATION,
  },
  [NotificationPosition.MIDDLE]: {
    translateY: {
      from: HIDDEN,
      to: OPEN * 1.5,
    },
    opacity: {from: 0, to: 1},
    duration: ANIMATION_DURATION * 1.5,
  },
  [NotificationPosition.LARGE]: {
    translateY: {
      from: HIDDEN,
      to: OPEN * 2,
    },
    opacity: {from: 0, to: 1},
    duration: ANIMATION_DURATION * 2,
  },
};
