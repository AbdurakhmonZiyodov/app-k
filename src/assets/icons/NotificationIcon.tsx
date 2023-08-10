import {Path, Svg} from 'react-native-svg';
import {IconProps} from 'types';

const NotificationIcon = ({
  width,
  height,
  color,
  style,
  ...resOfProps
}: IconProps) => {
  const path =
    'M9.00005 1.5C8.60222 1.5 8.22069 1.65804 7.93939 1.93934C7.65808 2.22064 7.50005 2.60218 7.50005 3C7.50005 3.19335 7.38857 3.36936 7.21378 3.45201C6.1474 3.95625 5.23834 4.74117 4.58402 5.72265C3.93183 6.70093 3.55724 7.83773 3.50005 9.01195V12C3.50005 12.0201 3.49884 12.0401 3.49642 12.0601C3.41176 12.7595 3.16406 13.4293 2.77326 14.0155C2.65975 14.1857 2.53509 14.3476 2.40032 14.5H15.5998C15.465 14.3476 15.3403 14.1857 15.2268 14.0155C14.836 13.4293 14.5883 12.7595 14.5037 12.0601C14.5013 12.0401 14.5 12.0201 14.5 12V9.01194C14.4428 7.83773 14.0683 6.70093 13.4161 5.72265C12.7618 4.74117 11.8527 3.95625 10.7863 3.45201C10.6115 3.36936 10.5 3.19335 10.5 3C10.5 2.60218 10.342 2.22064 10.0607 1.93934C9.7794 1.65804 9.39787 1.5 9.00005 1.5ZM11.5 15.5H6.50005V16C6.50005 16.663 6.76344 17.2989 7.23228 17.7678C7.70112 18.2366 8.337 18.5 9.00005 18.5C9.66309 18.5 10.299 18.2366 10.7678 17.7678C11.2367 17.2989 11.5 16.663 11.5 16V15.5ZM5.50005 15.5V16C5.50005 16.9283 5.86879 17.8185 6.52517 18.4749C7.18155 19.1313 8.07179 19.5 9.00005 19.5C9.9283 19.5 10.8185 19.1313 11.4749 18.4749C12.1313 17.8185 12.5 16.9283 12.5 16V15.5H17C17.2271 15.5 17.4257 15.347 17.4835 15.1274C17.5414 14.9078 17.444 14.6768 17.2464 14.5649C16.7696 14.2949 16.3628 13.9167 16.0589 13.4608C15.7603 13.0129 15.5691 12.5024 15.5 11.9688V9C15.5 8.99218 15.4999 8.98437 15.4995 8.97656C15.4357 7.61699 15.0031 6.30042 14.2481 5.16795C13.5481 4.1179 12.5953 3.26284 11.4795 2.68013C11.4092 2.13509 11.1606 1.62503 10.7678 1.23223C10.299 0.763392 9.66309 0.5 9.00005 0.5C8.337 0.5 7.70112 0.763392 7.23228 1.23223C6.83948 1.62503 6.59089 2.13509 6.52058 2.68013C5.40475 3.26283 4.452 4.1179 3.75197 5.16795C2.99699 6.30042 2.56441 7.61699 2.5006 8.97656C2.50023 8.98437 2.50005 8.99218 2.50005 9V11.9688C2.43095 12.5024 2.23977 13.0129 1.94121 13.4608C1.63725 13.9167 1.23049 14.2949 0.753669 14.5649C0.556072 14.6768 0.458691 14.9078 0.516547 15.1274C0.574403 15.347 0.772967 15.5 1.00005 15.5H5.50005Z';

  if (!height) height = width * 1.12;
  return (
    <Svg
      height={height}
      width={width}
      fill={'none'}
      style={style}
      viewBox={'0 0 18 20'}
      {...resOfProps}>
      <Path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </Svg>
  );
};

export default NotificationIcon;
