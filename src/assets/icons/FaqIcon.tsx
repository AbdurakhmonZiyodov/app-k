import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const FaqIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width;

  const path1 =
    'M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z';
  const path2 =
    'M10 14.9992V15.0092M10 11.4992C9.98159 11.1746 10.0692 10.8527 10.2495 10.5822C10.4299 10.3117 10.6933 10.1071 11 9.99919C11.3759 9.85545 11.7132 9.62642 11.9856 9.33014C12.2579 9.03386 12.4577 8.67841 12.5693 8.29178C12.6809 7.90514 12.7013 7.49788 12.6287 7.10205C12.5562 6.70623 12.3928 6.33264 12.1513 6.0107C11.9099 5.68877 11.597 5.42727 11.2373 5.24681C10.8776 5.06634 10.4809 4.97183 10.0785 4.97071C9.67611 4.9696 9.27892 5.06191 8.91824 5.24038C8.55756 5.41884 8.24323 5.6786 8 5.99919';

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 20 20"
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

export default FaqIcon;
