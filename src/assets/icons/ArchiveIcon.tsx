import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ArchiveIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 1.31;
  const path1 =
    'M2 18.735C1.69553 18.5592 1.44278 18.3063 1.26721 18.0017C1.09165 17.6971 0.999484 17.3516 1 17V3C1 2.46957 1.21072 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H10L15 6V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19H12M7 3H6M9 5H8M7 7H6M9 9H8M7 11H6M9 13H8M7 15C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V17C5 16.4696 5.21071 15.9609 5.58579 15.5858C5.96086 15.2107 6.46957 15 7 15Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 16 21"
      fill="none"
      {...resOfProps}>
      <Path
        d={path1}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default ArchiveIcon;
