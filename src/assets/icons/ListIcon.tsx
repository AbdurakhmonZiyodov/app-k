import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ListIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width;

  const path1 =
    'M15 1H3C1.89543 1 1 1.89543 1 3V5C1 6.10457 1.89543 7 3 7H15C16.1046 7 17 6.10457 17 5V3C17 1.89543 16.1046 1 15 1Z';
  const path2 =
    'M15 11H3C1.89543 11 1 11.8954 1 13V15C1 16.1046 1.89543 17 3 17H15C16.1046 17 17 16.1046 17 15V13C17 11.8954 16.1046 11 15 11Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 18 18"
      fill="none"
      {...resOfProps}>
      <Path
        stroke={color}
        d={path1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={color}
        d={path2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ListIcon;
