import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const GameIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 0.64;

  const path1 =
    'M19 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13H19C20.1046 13 21 12.1046 21 11V3C21 1.89543 20.1046 1 19 1Z';
  const path2 = 'M5 7H9M7 5V9M14 6V6.01M17 8V8.01';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 22 14"
      fill="none"
      {...resOfProps}>
      <Path
        d={path1}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={path2}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GameIcon;
