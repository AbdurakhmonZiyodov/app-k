import {COLORS} from 'constants/colors';
import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const RewardBannerIcon = ({size, color}: IconProps) => {
  const path1 =
    'M15.8072 1.49175C17.7008 1.49175 19.2368 10.2203 19.2368 21H22C22 9.3945 19.2124 0 15.799 0C13.8485 0 12.1256 2.8148 10.9878 7.23679C9.85002 2.8148 8.12708 0 6.19283 0C2.77946 0 0 9.38562 0 20.9911H2.76321C2.76321 10.2114 4.28297 1.49175 6.17658 1.49175C8.07019 1.49175 9.60621 9.55433 9.60621 19.4994H12.3532C12.3532 9.55433 13.8973 1.49175 15.7909 1.49175';

  return (
    <Svg
      width={ICON_SIZE || size}
      height={ICON_SIZE || size}
      viewBox="0 0 22 21"
      fill={color || COLORS.darkYellow}>
      <Path d={path1} fill={color || COLORS.darkYellow} />
    </Svg>
  );
};

export default RewardBannerIcon;
