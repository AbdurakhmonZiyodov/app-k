import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ReciveIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width;

  const path = 'M1 17H17M9 11V1M9 11L13 7M9 11L5 7';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 18 18"
      fill="none"
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

export default ReciveIcon;
