import {COLORS} from 'constants/colors';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

type StarIcon = IconProps & {
  fill?: keyof typeof COLORS;
};

const StarIcon = ({color, width, style, fill = 'transparent'}: StarIcon) => {
  const path =
    'M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z';
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      style={style}
      fill={COLORS[fill]}>
      <Path
        d={path}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StarIcon;
