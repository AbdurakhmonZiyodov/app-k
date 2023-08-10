import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    width: 165,
    height: 159,
    backgroundColor: COLORS.green,
    borderRadius: 8,
    position: 'relative',
    marginHorizontal: 6,
  },
  title: {
    position: 'absolute',
    top: 120,
    zIndex: 2,
    left: 25,
    color: COLORS.white,
  },
  image: {
    position: 'absolute',
    width: 163,
    height: 163,
    top: -5,
    left: 2,
    zIndex: 1,
  },
});
