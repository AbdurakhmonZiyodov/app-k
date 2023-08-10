import RN from 'components/RN';
import Lottie, {AnimatedLottieViewProps} from 'lottie-react-native';
import {forwardRef} from 'react';
import {styles} from './LottieComponent.styles';

interface ILottie extends AnimatedLottieViewProps {
  width?: number;
  height?: number;
}

const LottieComponenet = forwardRef(
  ({
    source,
    autoPlay,
    loop,
    width,
    height,
    style,
    ...resOfILottie
  }: ILottie) => (
    <RN.View style={styles.container}>
      <Lottie
        source={source}
        autoPlay={autoPlay}
        loop={loop}
        style={[{width, height}, style]}
        {...resOfILottie}
      />
    </RN.View>
  ),
);

LottieComponenet.displayName = 'LottieComponenet';
export default LottieComponenet;
