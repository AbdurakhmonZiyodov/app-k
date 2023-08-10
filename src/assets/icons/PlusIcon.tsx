import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const PlusIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width;

  const path1 =
    'M7 10H13M10 7V13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      {...resOfProps}>
      <Path
        d={path1}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default PlusIcon;
