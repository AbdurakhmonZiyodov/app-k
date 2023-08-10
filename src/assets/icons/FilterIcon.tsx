import {Svg, Path} from 'react-native-svg';
import {IconProps} from 'types';

const FilterIcon = ({color, width, height, style}: IconProps) => {
  if (!height) height = width;

  const path =
    'M1.50011 1H14.5001C14.6441 1.05051 14.7747 1.13331 14.8817 1.24206C14.9888 1.35082 15.0696 1.48264 15.1178 1.62742C15.1661 1.77221 15.1806 1.92612 15.1602 2.07737C15.1398 2.22861 15.085 2.37318 15.0001 2.5L10.0001 8V15L6.00011 12V8L1.00011 2.5C0.915198 2.37318 0.860443 2.22861 0.840035 2.07737C0.819628 1.92612 0.834109 1.77221 0.882371 1.62742C0.930633 1.48264 1.01139 1.35082 1.11847 1.24206C1.22554 1.13331 1.35609 1.05051 1.50011 1Z';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d={path}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FilterIcon;
