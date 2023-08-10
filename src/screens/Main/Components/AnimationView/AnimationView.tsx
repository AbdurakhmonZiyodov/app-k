import {isIPad} from 'constants/constants';
import SIZES from 'constants/sizes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import RenderCards from '../MainCards';

const SIZE = 300;
const CIRCLE_RADIUS = SIZE;

type ContextType = {
  translateX: number;
  translateY: number;
};

const AnimationView = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      if (distance > CIRCLE_RADIUS / 10) {
        translateX.value = withSpring(event.translationX, {
          damping: 20,
          mass: 100,
          stiffness: 0,
          overshootClamping: true,
          restDisplacementThreshold: 10,
        });
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  }));
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]}>
            <RenderCards />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default AnimationView;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginTop: isIPad ? 20 : 160,
    justifyContent: 'center',
  },
  animationView: {flex: 1},
  square: {
    zIndex: 9,
  },
  circle: {
    width: SIZES.width,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
