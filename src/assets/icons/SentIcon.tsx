import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const SentIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  const path = 'M9 1V11M9 1L13 5M9 1L5 5M1 17H17';

  if (!height) height = width;

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

export default SentIcon;
