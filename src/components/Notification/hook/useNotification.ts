import {useCallback, useContext} from 'react';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {NotificationContext} from '../../../contexts/NotificationContext';
import {ANIMATION_VALUES} from '../Notification.constants';
import {NotificationPosition} from '../Notification.types';

type useNotificationProps = {
  position: NotificationPosition;
  isBottom: boolean;
  duration?: number;
};

const useNotification = ({
  position,
  isBottom,
  duration,
}: useNotificationProps) => {
  const animationValues = ANIMATION_VALUES[position];

  const translateY = useSharedValue(animationValues.translateY.from);
  const visible = useContext(NotificationContext)?.visible;

  const runAnimation = useCallback(
    (num: number, callback?: () => void) => {
      translateY.value = withTiming(
        num,
        {duration: duration ?? animationValues.duration},
        finished => finished && callback && runOnJS(callback)(),
      );
    },
    [animationValues.duration, duration, translateY],
  );

  const onStart = useCallback(() => {
    runAnimation(animationValues.translateY.to);
  }, [animationValues.translateY.to, runAnimation]);

  const onHide = useCallback(() => {
    runAnimation(animationValues.translateY.from, visible?.off);
  }, [animationValues.translateY.from, runAnimation, visible?.off]);

  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      Object.values(animationValues.translateY),
      Object.values(animationValues.opacity),
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      [isBottom ? 'bottom' : 'top']: 0,
      transform: [
        {
          translateY: translateY.value * (isBottom ? -1 : 1),
        },
      ],
    };
  }, []);

  return {
    onStart,
    onHide,
    style,
  };
};

export default useNotification;
