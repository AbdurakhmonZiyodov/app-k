import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const EyeOffIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 0.91;

  const path1 =
    'M2 1L20 19M9.584 8.587C9.20872 8.96202 8.99778 9.47075 8.99759 10.0013C8.99741 10.5318 9.20798 11.0407 9.583 11.416C9.95802 11.7913 10.4668 12.0022 10.9973 12.0024C11.5278 12.0026 12.0367 11.792 12.412 11.417';

  const path2 =
    'M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906';
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      style={style}
      {...resOfProps}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path1}
        stroke={color}
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path2}
        stroke={color}
      />
    </Svg>
  );
};

export default EyeOffIcon;
