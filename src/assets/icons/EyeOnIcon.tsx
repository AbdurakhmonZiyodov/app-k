import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const EyeOnIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 0.73;

  const path1 =
    'M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z';

  const path2 =
    'M21 8C18.333 12.667 15 15 11 15C7 15 3.667 12.667 1 8C3.667 3.333 7 1 11 1C15 1 18.333 3.333 21 8Z';
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      style={style}
      {...resOfProps}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path1}
        stroke={color}
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path2}
        stroke={color}
      />
    </Svg>
  );
};

export default EyeOnIcon;
