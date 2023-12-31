import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const DockIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 1.25;

  const path =
    'M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V6M10 1L15 6M5 7H6M5 11H11M5 15H11';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 16 20"
      fill="none"
      {...resOfProps}>
      <Path
        d={path}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DockIcon;
