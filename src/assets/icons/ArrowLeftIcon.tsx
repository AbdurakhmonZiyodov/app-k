import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ArrowLeftIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.625;
  const path = 'M1 5H15M1 5L5 9M1 5L5 1';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 10"
      fill="none"
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

export default ArrowLeftIcon;
