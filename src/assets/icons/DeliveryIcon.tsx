import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const DeliveryIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.76;
  const path1 =
    'M6 15C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11C4.89543 11 4 11.8954 4 13C4 14.1046 4.89543 15 6 15Z';
  const path2 =
    'M16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15Z';
  const path3 = 'M4 13H2V9M1 1H12V13M8 13H14M18 13H20V7H12M12 2H17L20 7M2 5H6';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 21 16"
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
      <Path
        d={path3}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DeliveryIcon;
