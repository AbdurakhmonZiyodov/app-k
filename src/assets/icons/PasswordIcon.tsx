import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const PasswordIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.3;

  const path1 =
    'M10 1V5M8 4L12 2M8 2L12 4M3 1V5M1 4L5 2M1 2L5 4M17 1V5M15 4L19 2M15 2L19 4';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 6"
      fill="none"
      {...resOfProps}>
      <Path
        d={path1}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PasswordIcon;
