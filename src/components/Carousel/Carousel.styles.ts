import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.green,
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    bottom: -17,
    alignSelf: 'center',
  },
  blurStyle: {
    position: 'absolute',
    backgroundColor: COLORS.black025,
    width: 100,
    height: 15,
    alignSelf: 'center',
    bottom: 10,
    borderRadius: 7,
    overflow: 'hidden',
  },
});
