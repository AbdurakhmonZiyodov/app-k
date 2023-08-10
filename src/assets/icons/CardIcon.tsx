import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const CardIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 0.8;
  const path1 =
    'M16 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H16C17.6569 15 19 13.6569 19 12V4C19 2.34315 17.6569 1 16 1Z';
  const path2 = 'M1 6H19M5 11H5.01M9 11H11';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 16"
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

export default CardIcon;
