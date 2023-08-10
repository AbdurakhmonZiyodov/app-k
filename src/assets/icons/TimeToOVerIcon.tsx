import {COLORS} from 'constants/colors';
import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const TimeToOver = ({size, color}: IconProps) => {
  const path1 =
    'M7.5 7L6 6V3.5M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z';

  return (
    <Svg
      width={ICON_SIZE || size}
      height={ICON_SIZE || size}
      viewBox="0 0 12 12"
      fill={color || COLORS.grey}>
      <Path d={path1} fill={color || '#757575'} />
    </Svg>
  );
};

export default TimeToOver;
