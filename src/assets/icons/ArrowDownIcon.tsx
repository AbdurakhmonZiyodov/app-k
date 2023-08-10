import {COLORS} from 'constants/colors';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ArrowDownIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.625;
  const path =
    'M2.9998 3.60039L5.9998 6.60039L8.9998 3.60039L10.1998 4.20039L5.9998 8.40039L1.7998 4.20039L2.9998 3.60039Z';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={COLORS.white}
      style={style}
      {...resOfProps}>
      <Path
        d={path}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowDownIcon;
