import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  headerCircleIcon: {
    width: 12,
    aspectRatio: 1,
    backgroundColor: COLORS.yellow,
    position: 'absolute',
    top: -2,
    right: -2,
    borderRadius: 12 / 2,
  },
  headerTopContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
  },
});
