import {Icons} from 'assets/icons';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {HIT_SLOP} from 'constants/constants';
import Notifications from 'contexts/Notifications';
import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import useNotification from './hook/useNotification';
import {AUTOCLOSE_TIME} from './Notification.constants';
import {styles} from './Notification.styles';
import {
  NotificationPosition,
  NotificationProps,
  NotificationType,
} from './Notification.types';

type Props = NotificationProps & {
  isVisible: boolean;
};

export type NotificationRefProps = {
  onHide: () => void;
};

export type NoticationTypeStyle = {
  titleStyle: StyleProp<TextStyle>;
  backgroundColor: string;
};

const getNotificationTypeStyle = (
  notificationType: NotificationType,
): NoticationTypeStyle => {
  if (
    Object.prototype.hasOwnProperty.call(
      Notifications.NotificationStyles,
      notificationType,
    )
  )
    return Notifications.NotificationStyles[notificationType];

  return {
    titleStyle: {
      color: COLORS.white,
    },
    backgroundColor: COLORS.grey,
  };
};

const defaultRenderAction = () => (
  <View style={styles.closeButtonContainer}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={Notifications.hide}
      hitSlop={HIT_SLOP}>
      <Icons.Cross color={COLORS.white} width={12} />
    </TouchableOpacity>
  </View>
);

const Notification = forwardRef<NotificationRefProps, Props>(
  (
    {
      title,
      titleStyle,
      renderAction = defaultRenderAction,
      backgroundColor,
      isVisible,
      position = NotificationPosition.MIDDLE,
      isBottom = false,
      autoCloseTime = AUTOCLOSE_TIME,
      duration,
      notificationType = NotificationType.INFO,
    },
    ref,
  ) => {
    const notification = useNotification({position, isBottom, duration});
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    useImperativeHandle(
      ref,
      () => ({
        onHide: notification.onHide,
      }),
      [notification],
    );

    useEffect(() => {
      if (isVisible) {
        notification.onStart();

        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = undefined;
        }

        if (autoCloseTime) {
          timeout.current = setTimeout(() => {
            notification.onHide();
            timeout.current = undefined;
          }, autoCloseTime);
        }
      }
    }, [autoCloseTime, isVisible, notification]);

    const notificationTypeStyle = getNotificationTypeStyle(notificationType);

    return (
      <Animated.View style={[styles.container, notification.style]}>
        <View
          style={[
            styles.notificationContainer,
            {
              backgroundColor:
                backgroundColor ?? notificationTypeStyle.backgroundColor,
            },
          ]}>
          {!!title && (
            <Text
              title={title}
              type={'boldCaption2'}
              style={[
                styles.title,
                notificationTypeStyle.titleStyle,
                titleStyle,
              ]}
            />
          )}

          {renderAction && renderAction()}
        </View>
      </Animated.View>
    );
  },
);

Notification.displayName = 'Notification';

export default Notification;
