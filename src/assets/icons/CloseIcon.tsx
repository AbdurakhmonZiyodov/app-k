import {COLORS} from 'constants/colors';
import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const CloseIcon = ({size, color}: IconProps) => {
  const path1 = 'M13 1L1 13M1 1L13 13';

  return (
    <Svg
      width={ICON_SIZE || size}
      height={ICON_SIZE || size}
      viewBox="0 0 14 14"
      fill={color || COLORS.grey}
      stroke="black"
      stroke-width="2">
      <Path d={path1} fill={color || '#757575'} />
    </Svg>
  );
};

export default CloseIcon;
