import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const TicketIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width * 1.25;
  const path =
    'M5 5H11M5 9H11M9 13H11M1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L12 17L10 19L8 17L6 19L4 17L1 19Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 16 20"
      fill={'none'}
      {...resOfProps}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path}
        stroke={color}
      />
    </Svg>
  );
};

export default TicketIcon;
