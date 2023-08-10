import {Path, Svg} from 'react-native-svg';
import {ColoredIconProps} from 'types';

const GoogleAuthIcon = ({width, height, style}: ColoredIconProps) => {
  if (!height) height = width;

  const path1 =
    'M19.6004 10.235C19.6004 9.57364 19.5364 8.89098 19.4297 8.25098H10.1924V12.027H15.483C15.2697 13.243 14.5657 14.3096 13.5204 14.9923L16.6777 17.4456C18.5337 15.7176 19.6004 13.2003 19.6004 10.235Z';
  const path2 =
    'M10.192 19.7927C12.8373 19.7927 15.056 18.9181 16.6773 17.4247L13.52 14.9927C12.6453 15.5901 11.5146 15.9314 10.192 15.9314C7.63198 15.9314 5.47731 14.2034 4.68798 11.8994L1.44531 14.3954C3.10931 17.7021 6.47998 19.7927 10.192 19.7927Z';
  const path3 =
    'M4.68794 11.8775C4.28261 10.6615 4.28261 9.3388 4.68794 8.1228L1.44527 5.60547C0.0586068 8.3788 0.0586068 11.6428 1.44527 14.3948L4.68794 11.8775Z';
  const path4 =
    'M10.192 4.09105C11.5786 4.06971 12.944 4.60305 13.9466 5.56305L16.7413 2.74705C14.9706 1.08305 12.624 0.187047 10.192 0.20838C6.47998 0.20838 3.10931 2.29905 1.44531 5.60571L4.68798 8.12305C5.47731 5.79771 7.63198 4.09105 10.192 4.09105Z';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      style={style}>
      <Path d={path1} fill="#4280EF" />
      <Path d={path2} fill="#34A353" />
      <Path d={path3} fill="#F6B704" />
      <Path d={path4} fill="#E54335" />
    </Svg>
  );
};

export default GoogleAuthIcon;
