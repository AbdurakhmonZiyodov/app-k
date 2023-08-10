import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const CompanyListIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.9;
  const path1 =
    'M17 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V3C19 1.89543 18.1046 1 17 1Z';
  const path2 = 'M5 5H15M5 9H15M5 13H15';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 18"
      fill="none"
      {...resOfProps}>
      <Path
        d={path1}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Path
        d={path2}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
};

export default CompanyListIcon;
