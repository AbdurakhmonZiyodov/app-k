import {
  NotificationContextProps,
  NotificationPosition,
  NotificationProps,
  NotificationType,
} from 'components/Notification/Notification.types';
import {COLORS} from 'constants/colors';
import React, {MutableRefObject} from 'react';
import {NoticationTypeStyle} from '../components/Notification/Notification';

const DEFAULT_ERROR = 'internal server error';
export default class Notifications {
  static notificationsRef: MutableRefObject<
    NotificationContextProps | undefined
  >;
  static setNotificationsRef = (
    ref: React.MutableRefObject<NotificationContextProps | undefined>,
  ) => {
    this.notificationsRef = ref;
  };

  static show = (props: NotificationProps) => {
    this.notificationsRef.current?.show(props);
  };
  static hide = () => {
    this.notificationsRef.current?.onHide();
  };

  static showError = (title?: string) => {
    this.notificationsRef.current?.show({
      title: title || DEFAULT_ERROR,
      isBottom: true,
      notificationType: NotificationType.ERROR,
      position: NotificationPosition.SMALL,
    });
  };

  static setNotificationTypeStyles = (props: {
    [key in NotificationType]: NoticationTypeStyle;
  }) => {
    this.NotificationStyles = props;
  };

  static setDefaultPagePosition = (position: NotificationPosition) => {
    this.notificationsRef.current?.setDefaultPagePosition(position);
  };

  static NotificationStyles: {[key in NotificationType]: NoticationTypeStyle} =
    {
      [NotificationType.ERROR]: {
        titleStyle: {
          color: COLORS.white,
        },
        backgroundColor: COLORS.red,
      },
      [NotificationType.INFO]: {
        titleStyle: {
          color: COLORS.white,
        },
        backgroundColor: COLORS.grey,
      },
    };
}
