import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const useScrollHelper = () => {
  const scrollOffset = useSharedValue(0);

  const horizontalScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  const verticalScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  return {
    scrollOffset,
    verticalScrollHandler,
    horizontalScrollHandler,
  };
};

export default useScrollHelper;
