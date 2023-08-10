import {COLORS} from 'constants/colors';
import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

const AccountIcon = ({size, color}: IconProps) => {
  const path1 =
    'M10 0C4.48421 0 0 4.48421 0 10C0 15.5158 4.48421 20 10 20C15.5158 20 20 15.5158 20 10C20 4.48421 15.5158 0 10 0ZM10 4.37895C11.3683 4.37895 12.4841 5.49474 12.4841 6.86308C12.4841 8.23143 11.3683 9.34722 10 9.34722C8.63165 9.34722 7.51586 8.23143 7.51586 6.86308C7.51586 5.49474 8.63165 4.37895 10 4.37895ZM14.0842 14.5474C14.0842 14.779 13.8948 14.9895 13.642 14.9895L6.35782 14.9894C6.12623 14.9894 5.91564 14.8 5.91564 14.5472V13.0946C5.91564 11.4735 7.22086 10.1682 8.84196 10.1682H11.1578C12.7789 10.1682 14.0841 11.4735 14.0841 13.0946L14.0842 14.5474Z';

  return (
    <Svg
      width={size || ICON_SIZE}
      height={size || ICON_SIZE}
      viewBox="0 0 20 20"
      fill={color || COLORS.grey}>
      <Path d={path1} fill={color || '#757575'} />
    </Svg>
  );
};

export default AccountIcon;
