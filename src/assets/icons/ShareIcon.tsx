import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ShareIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width;

  const paths = [
    'M4 13C5.65685 13 7 11.6569 7 10C7 8.34315 5.65685 7 4 7C2.34315 7 1 8.34315 1 10C1 11.6569 2.34315 13 4 13Z',
    'M16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 5.65685 14.3431 7 16 7Z',
    'M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z',
    'M6.7002 8.70078L13.3002 5.30078M6.7002 11.3008L13.3002 14.7008',
  ];

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      {...resOfProps}>
      {paths.map(path => (
        <Path
          d={path}
          key={path}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </Svg>
  );
};

export default ShareIcon;
