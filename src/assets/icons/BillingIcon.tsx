import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const BillingIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.7;

  const path1 =
    'M10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z';
  const path2 =
    'M17 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13H17C18.1046 13 19 12.1046 19 11V3C19 1.89543 18.1046 1 17 1Z';
  const path3 = 'M16 7H16.01M4 7H4.01';
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 14"
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

export default BillingIcon;
