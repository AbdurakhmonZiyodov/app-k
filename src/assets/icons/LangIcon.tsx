import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const LangIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 1.05;
  const path1 = 'M1 3H8M6 1V3C6 7.418 3.761 11 1 11';
  const path2 =
    'M2 7C1.997 9.144 4.952 10.908 8.7 11M9 18L13 9L17 18M16.1 16H9.9';
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 18 19"
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

export default LangIcon;
