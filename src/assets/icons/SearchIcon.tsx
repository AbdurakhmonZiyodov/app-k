import Svg, {Path} from 'react-native-svg';
import type {IconProps} from 'types';

const SearchIcon = ({color = '#3C3C43', width, height, style}: IconProps) => {
  if (!height) height = width * 1.07;

  const path =
    'M6.12586 12.6357C7.45619 12.6357 8.68295 12.2096 9.68667 11.4995L13.4626 15.2396C13.6378 15.4132 13.8688 15.5 14.1158 15.5C14.6336 15.5 15 15.1055 15 14.6005C15 14.3638 14.9203 14.1349 14.7451 13.9692L10.9931 10.2449C11.7817 9.2191 12.2517 7.94871 12.2517 6.56786C12.2517 3.23014 9.49549 0.5 6.12586 0.5C2.76421 0.5 0 3.22225 0 6.56786C0 9.90558 2.75624 12.6357 6.12586 12.6357ZM6.12586 11.3259C3.49708 11.3259 1.32236 9.17175 1.32236 6.56786C1.32236 3.96397 3.49708 1.80984 6.12586 1.80984C8.75465 1.80984 10.9294 3.96397 10.9294 6.56786C10.9294 9.17175 8.75465 11.3259 6.12586 11.3259Z';
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      style={style}>
      <Path d={path} fill={color} fill-opacity="0.6" />
    </Svg>
  );
};

export default SearchIcon;
