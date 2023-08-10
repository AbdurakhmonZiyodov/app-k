import type {StyleProp, TextStyle} from 'react-native';
import React from 'react';
// @types

export enum NotificationPosition {
  SMALL,
  MIDDLE,
  LARGE,
}

export enum NotificationType {
  ERROR,
  INFO,
}

export type NotificationProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  position?: NotificationPosition;
  isBottom?: boolean;
  duration?: number;
  autoCloseTime?: number;
  renderAction?: () => React.ReactNode;
  notificationType?: NotificationType;
};

export type NotificationContextProps = {
  show: (prop: NotificationProps) => void;
  onHide: () => void;
  visible: {
    isVisible: boolean;
    on: () => void;
    off: () => void;
  };
  setDefaultPagePosition: (position: NotificationPosition) => void;
};
