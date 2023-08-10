import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ApprovedIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width;

  const path1 =
    'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z';

  const path2 = 'M7 10L9 12L13 8';

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
      <Path
        d={path2}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ApprovedIcon;
