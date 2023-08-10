import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const RejectedIcon = ({
  color,
  width,
  height,
  style,
  ...resOfProps
}: IconProps) => {
  if (!height) height = width;

  const path =
    'M6.5 6.5L13.5 13.5M6.5 13.5L13.5 6.5M10 19C12.3869 19 14.6761 18.0518 16.364 16.364C18.0518 14.6761 19 12.3869 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10C1 12.3869 1.94821 14.6761 3.63604 16.364C5.32387 18.0518 7.61305 19 10 19V19Z';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 20"
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

export default RejectedIcon;
