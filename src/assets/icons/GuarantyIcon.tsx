import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const GuarantyIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 1.17;
  const path =
    'M12 1V5C12 5.26522 12.1054 5.51957 12.2929 5.70711C12.4804 5.89464 12.7348 6 13 6H17M12 1H5C4.46957 1 3.96086 1.21071 3.58579 1.58579C3.21071 1.96086 3 2.46957 3 3V6M12 1L17 6M17 6V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H10M2.5 15L1 20L4 18.5L7 20L5.5 15M7 12C7 13.6569 5.65685 15 4 15C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9C5.65685 9 7 10.3431 7 12Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 18 21"
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

export default GuarantyIcon;
