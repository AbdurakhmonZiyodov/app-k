import Svg, {Path} from 'react-native-svg';

const CheckOutlineIcon = ({width}: {width: number}) => {
  const height = width * 0.95;

  return (
    <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
      <Path
        d="M8.25049 14C11.6678 14 14.438 11.3137 14.438 8C14.438 4.68629 11.6678 2 8.25049 2C4.83323 2 2.06299 4.68629 2.06299 8C2.06299 11.3137 4.83323 14 8.25049 14Z"
        stroke="#BCBCBC"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.25 14C11.6673 14 14.4375 11.3137 14.4375 8C14.4375 4.68629 11.6673 2 8.25 2C4.83274 2 2.0625 4.68629 2.0625 8C2.0625 11.3137 4.83274 14 8.25 14Z"
        stroke="#ADFE37"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15625 8L7.21875 10L11.3438 6"
        stroke="#ADFE37"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CheckOutlineIcon;
