import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const ClipIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 1.05;

  const path1 =
    'M12.0002 5.00045L5.50019 11.5005C5.10237 11.8983 4.87887 12.4378 4.87887 13.0005C4.87887 13.5631 5.10237 14.1026 5.50019 14.5005C5.89802 14.8983 6.43758 15.1218 7.00019 15.1218C7.5628 15.1218 8.10237 14.8983 8.50019 14.5005L15.0002 8.00045C15.7958 7.2048 16.2428 6.12567 16.2428 5.00045C16.2428 3.87523 15.7958 2.7961 15.0002 2.00045C14.2045 1.2048 13.1254 0.757813 12.0002 0.757813C10.875 0.757812 9.79584 1.2048 9.00019 2.00045L2.50019 8.50045C1.30672 9.69393 0.63623 11.3126 0.63623 13.0005C0.63623 14.6883 1.30672 16.307 2.50019 17.5005C3.69367 18.6939 5.31236 19.3644 7.00019 19.3644C8.68802 19.3644 10.3067 18.6939 11.5002 17.5005L18.0002 11.0005';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 19 20"
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
export default ClipIcon;
