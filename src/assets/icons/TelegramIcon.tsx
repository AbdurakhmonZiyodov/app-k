import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const TelegramIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.9;

  const path = 'M13 7L9 11L15 17L19 1L1 8L5 10L7 16L10 12';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 18"
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

export default TelegramIcon;
