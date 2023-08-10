import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const AccountIconBorder = ({size, color}: IconProps) => {
  const path1 =
    'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z';
  const path2 =
    'M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z';
  const path3 =
    'M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855';

  return (
    <Svg
      width={ICON_SIZE || size}
      height={ICON_SIZE || size}
      viewBox="0 0 24 24">
      <Path
        d={path1}
        fill={color || '#ADFE37'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={path2}
        fill={color || '#ADFE37'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d={path3}
        fill={color || '#ADFE37'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AccountIconBorder;
