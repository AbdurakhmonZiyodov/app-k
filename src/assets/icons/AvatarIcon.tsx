import {COLORS} from 'constants/colors';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  color?: string;
  iconHeight?: number;
  iconWidth?: number;
};

const AvatarIcon = ({color, iconHeight, iconWidth}: IconProps) => {
  const path1 =
    'M32 0C49.6731 0 64 14.3269 64 32C64 41.0272 60.2621 49.1813 54.2496 54.9991C49.1326 48.3125 41.0699 44 32 44C22.9301 44 14.8674 48.3125 9.75048 54.9988C3.73793 49.1813 0 41.0272 0 32C0 14.3269 14.3269 0 32 0ZM32 16C25.3726 16 20 21.3726 20 28C20 34.6274 25.3726 40 32 40C38.6274 40 44 34.6274 44 28C44 21.3726 38.6274 16 32 16Z';

  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 64 64"
      fill={color || COLORS.white}
      fill-opacity="0.24">
      <Path d={path1} fill={color || COLORS.white} />
    </Svg>
  );
};

export default AvatarIcon;
