import {ICON_SIZE} from 'constants/constants';
import {Path, Svg} from 'react-native-svg';

type Icon = {
  size?: number;
  color?: string;
};

const BagFillIcon = ({color, size}: Icon) => {
  const path1 =
    'M10 1.25C10.8288 1.25 11.6237 1.57924 12.2097 2.16529C12.7958 2.75134 13.125 3.5462 13.125 4.375V5H6.875V4.375C6.875 3.5462 7.20424 2.75134 7.79029 2.16529C8.37634 1.57924 9.1712 1.25 10 1.25ZM14.375 5V4.375C14.375 3.21468 13.9141 2.10188 13.0936 1.28141C12.2731 0.460936 11.1603 0 10 0C8.83968 0 7.72688 0.460936 6.90641 1.28141C6.08594 2.10188 5.625 3.21468 5.625 4.375V5H1.25V17.5C1.25 18.163 1.51339 18.7989 1.98223 19.2678C2.45107 19.7366 3.08696 20 3.75 20H16.25C16.913 20 17.5489 19.7366 18.0178 19.2678C18.4866 18.7989 18.75 18.163 18.75 17.5V5H14.375Z';

  return (
    <Svg
      width={size || ICON_SIZE}
      height={size || ICON_SIZE}
      viewBox="0 0 20 20"
      fill="none">
      <Path d={path1} fill={color || '#757575'} />
    </Svg>
  );
};

export default BagFillIcon;
