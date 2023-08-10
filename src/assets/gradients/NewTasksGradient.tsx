import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {GradientProps} from '.';

const NewTasksGradient = ({
  containerStyle,
  gradientStyle,
  children,
}: GradientProps) => (
  <RN.View style={[styles.container, containerStyle]}>
    <RN.View style={[styles.gradient, gradientStyle]}>
      <Svg viewBox="0 0 375 245" fill="none">
        <Rect
          x="-1"
          width="376"
          height="245"
          fill="url(#paint0_linear_2300_34128)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_2300_34128"
            x1="187"
            y1="0"
            x2="187"
            y2="245"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#141414" stopOpacity="0" />
            <Stop offset="1" stopColor="#141414" />
          </LinearGradient>
        </Defs>
      </Svg>
    </RN.View>

    {children}
  </RN.View>
);

const styles = RN.StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.height * 0.45,
    backgroundColor: COLORS.red2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: -80,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});

export default NewTasksGradient;
