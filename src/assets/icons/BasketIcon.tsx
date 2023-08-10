import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconProps} from 'types';

const BasketIcon = ({color, width, style}: IconProps) => {
  const path =
    'M7 10L12 4L17 10M21 10L19 18C18.9065 18.5732 18.6552 19.0872 18.2897 19.4527C17.9243 19.8181 17.4679 20.0118 17 20H7C6.53211 20.0118 6.07572 19.8181 5.71028 19.4527C5.34485 19.0872 5.0935 18.5732 5 18L3 10H21ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z';
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
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

export default BasketIcon;
