import {Path, Svg} from 'react-native-svg';

type TabBarLineIconProps = {
  width: number;
};

const TabBarLineIcon = ({width}: TabBarLineIconProps) => (
  <Svg width={width} height={0.22 * width} viewBox="0 0 376 84" fill="none">
    <Path
      d="M375 16.2V67.8C375 76.7 367.838 84 358.886 84H16.1141C7.16181 84 0 76.8 0 67.8V16.2C0 7.2 7.16181 0 16.1141 0H138.163C145.225 0 151.293 4.7 153.581 11.4C158.355 25.7 171.784 36 187.599 36C203.415 36 216.844 25.7 221.618 11.4C223.707 4.7 229.775 0 236.837 0H358.886C367.838 0 375 7.2 375 16.2Z"
      fill="#1B1B1B"
    />
    <Path d="M0 0H58V84H0V0Z" fill="#1B1B1B" />
    <Path d="M318 0H376V84H318V0Z" fill="#1B1B1B" />
  </Svg>
);

export default TabBarLineIcon;
