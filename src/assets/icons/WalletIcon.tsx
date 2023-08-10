import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const WalletIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width;

  const path1 =
    'M14 5V2C14 1.73478 13.8946 1.48043 13.7071 1.29289C13.5196 1.10536 13.2652 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V9M16 13V16C16 16.2652 15.8946 16.5196 15.7071 16.7071C15.5196 16.8946 15.2652 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3';

  const path2 =
    'M17 9V13H13C12.4696 13 11.9609 12.7893 11.5858 12.4142C11.2107 12.0391 11 11.5304 11 11C11 10.4696 11.2107 9.96086 11.5858 9.58579C11.9609 9.21071 12.4696 9 13 9H17Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 18 18"
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
    </Svg>
  );
};

export default WalletIcon;
