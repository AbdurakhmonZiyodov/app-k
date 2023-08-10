import IProvider from 'components/IProvider';
import RN from 'components/RN';
import LargeButton from 'components/UI/components/PrimaryButton/PrimaryButtonLarge/PrimaryButtonLarge';
import useRootStore from 'hooks/useRootStore';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import {ButtonType} from 'types';
import {styles} from './DaoPasswordScreen.styles';

const DaoPasswordScreen = () => {
  const token = useRootStore()._token;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withSpring(10),
            withDelay(100, withSpring(-10)),
            withSpring(12),
          ),
          -1,
        ),
      },
    ],
    opacity: withRepeat(
      withSequence(
        withSpring(0.7),
        withDelay(100, withSpring(0.5)),
        withSpring(1),
      ),
      -1,
    ),
  }));

  return (
    <IProvider>
      <RN.View style={styles.container}>
        <LargeButton
          title="logout"
          type={ButtonType.FILLED}
          onPress={token.clear}
        />

        <Animated.View style={animatedStyle}>
          <RN.Text>Dao Password screen</RN.Text>
        </Animated.View>
      </RN.View>
    </IProvider>
  );
};
export default DaoPasswordScreen;
