import Svg, {Path} from 'react-native-svg';
import {IconProps} from 'types';

const TimeIcon = ({width, height, style}: Omit<IconProps, 'color'>) => {
  if (!height) height = width;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      style={style}>
      <Path
        d="M7.5 7L6 6V3.5M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
        stroke="#BDBDBD"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TimeIcon;
