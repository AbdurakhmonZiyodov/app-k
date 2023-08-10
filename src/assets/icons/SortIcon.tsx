import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const SortIcon = ({color, width, height, style}: IconProps) => {
  if (!height) height = width * 0.8;
  const path = 'M1 5L5 1L9 5M5 1V15M19 11L15 15L11 11M15 15V1';
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      style={style}
      fill="none">
      <Path
        d={path}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SortIcon;
