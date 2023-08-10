import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const HeartIcon = ({color, width, height, style, ...resOfProps}: IconProps) => {
  if (!height) height = width * 0.9;
  const path =
    'M17.4998 9.57169L9.99981 16.9997L2.49981 9.57169C2.00512 9.0903 1.61546 8.5117 1.35536 7.87232C1.09527 7.23295 0.970374 6.54664 0.98855 5.85662C1.00673 5.1666 1.16758 4.48782 1.46097 3.86303C1.75436 3.23823 2.17395 2.68094 2.6933 2.22627C3.21265 1.77159 3.82052 1.42938 4.47862 1.22117C5.13673 1.01296 5.83082 0.943272 6.51718 1.01649C7.20354 1.08971 7.86731 1.30425 8.46669 1.64659C9.06606 1.98894 9.58806 2.45169 9.99981 3.00569C10.4133 2.45571 10.9359 1.99701 11.5349 1.65829C12.1339 1.31958 12.7963 1.10814 13.4807 1.03721C14.1652 0.966279 14.8569 1.03739 15.5126 1.24608C16.1683 1.45477 16.7738 1.79656 17.2914 2.25005C17.8089 2.70354 18.2272 3.25897 18.5202 3.88158C18.8132 4.50419 18.9746 5.18057 18.9941 5.8684C19.0137 6.55622 18.8911 7.24068 18.6339 7.87894C18.3768 8.5172 17.9907 9.09551 17.4998 9.57769';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      style={style}
      {...resOfProps}>
      <Path
        d={path}
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HeartIcon;