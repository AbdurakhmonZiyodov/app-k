import {Path, Svg} from 'react-native-svg';
import {IconProps} from 'types';

const ArrowBoldIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  const path =
    'M6.57474 -0.000391097C7.02474 -0.000391057 7.33708 0.203942 7.51174 0.612609C7.68708 1.02061 7.61641 1.38294 7.29974 1.69961L4.69974 4.29961C4.59974 4.39961 4.49141 4.47461 4.37474 4.52461C4.25808 4.57461 4.13308 4.59961 3.99974 4.59961C3.86641 4.59961 3.74141 4.57461 3.62474 4.52461C3.50808 4.47461 3.39974 4.39961 3.29974 4.29961L0.699744 1.69961C0.383077 1.38294 0.312411 1.02061 0.487744 0.612608C0.662411 0.203942 0.974745 -0.000391586 1.42474 -0.000391547L6.57474 -0.000391097Z';

  if (!height) height = width * 0.625;

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 8 5"
      fill="none"
      {...resOfProps}>
      <Path d={path} fill={color} />
    </Svg>
  );
};

export default ArrowBoldIcon;
