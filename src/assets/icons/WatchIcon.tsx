import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const WatchIcon = ({width, height, style, color, ...resOfProps}: IconProps) => {
  const path =
    'M13 12L10 10V5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z';

  if (!height) height = width;

  return (
    <Svg
      height={height}
      width={width}
      fill="none"
      style={style}
      viewBox="0 0 20 20"
      {...resOfProps}>
      <Path
        d={path}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
};

export default WatchIcon;
