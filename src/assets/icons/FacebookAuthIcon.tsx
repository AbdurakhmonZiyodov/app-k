import {Path, Svg} from 'react-native-svg';
import {ColoredIconProps} from 'types';

const FacebookAuthIcon = ({width, height, style}: ColoredIconProps) => {
  if (!height) height = width * 1.82;

  const path1 =
    'M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 11 20"
      fill="none"
      style={style}>
      <Path d={path1} fill="#4280EF" />
    </Svg>
  );
};

export default FacebookAuthIcon;
