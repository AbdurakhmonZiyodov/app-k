import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CrossIconProps {
  width: number;
  height?: number;
  color: string;
}

const CrossIcon = (props: CrossIconProps) => {
  const {width, color} = props;

  let height = props.height;

  if (!height) height = width;

  return (
    <Svg width={width} height={height} viewBox="0 0 14 14">
      <Path
        d="M13 1L1 13M1 1L13 13"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CrossIcon;
