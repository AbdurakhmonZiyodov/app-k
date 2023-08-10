/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Notification, {
  NotificationRefProps,
} from 'components/Notification/Notification';
import {
  NotificationContextProps,
  NotificationPosition,
  NotificationProps,
} from 'components/Notification/Notification.types';
import {
  createContext,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Notifications from './Notifications';

//  context
export const NotificationContext = createContext<NotificationContextProps>({
  onHide: () => undefined,
  show: (prop: NotificationProps) => undefined,
  visible: {
    isVisible: false,
    on: () => undefined,
    off: () => undefined,
  },
  setDefaultPagePosition: (position: NotificationPosition) => undefined,
});

export const NotificationProvider = ({children}: {children: ReactNode}) => {
  const [state, setState] = useState<NotificationProps | null>(null);
  const [defaultPagePosition, setDefaultPagePosition] = useState<
    NotificationPosition | undefined
  >(undefined);
  const [active, setActive] = useState(false);
  const notificationRef = useRef<NotificationRefProps>(null);

  const visible = {
    isVisible: active,
    on: useCallback(() => setActive(() => true), []),
    off: useCallback(() => setActive(() => false), []),
  };

  const show = useCallback(
    (option: NotificationProps) => {
      if (option && option.position == undefined) {
        option.position = defaultPagePosition;
      }
      setState(() => option);
      visible.on();
    },
    [defaultPagePosition, visible],
  );

  const onHide = useCallback(() => {
    if (notificationRef && notificationRef.current) {
      notificationRef.current.onHide();
    }
  }, [notificationRef]);

  const setDefaultNotificationPosition = useCallback(
    (position: NotificationPosition) => {
      setDefaultPagePosition(position);
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      show,
      visible,
      onHide,
      setDefaultPagePosition: setDefaultNotificationPosition,
    }),
    [show, visible, onHide, setDefaultNotificationPosition],
  );

  const notificationsRef = useRef<NotificationContextProps>();

  useLayoutEffect(() => {
    Notifications.setNotificationsRef(notificationsRef);
  }, []);

  useImperativeHandle(
    notificationsRef,
    () => ({
      onHide: onHide,
      show: show,
      visible: visible,
      setDefaultPagePosition: setDefaultNotificationPosition,
    }),
    [onHide, setDefaultNotificationPosition, show, visible],
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {visible.isVisible && (
        <Notification
          ref={notificationRef}
          {...state}
          isVisible={visible.isVisible}
        />
      )}
    </NotificationContext.Provider>
  );
};
