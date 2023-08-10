import RN from 'components/RN/RN';
import {COLORS} from 'constants/colors';
import {scale} from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  headerTitle: {
    color: COLORS.black,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: COLORS.transparent,
  },
  headerLeftIcon: {
    color: COLORS.black,
    width: 20,
  },
  bandgeContainer: {
    width: scale(12),
    aspectRatio: 1,
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -4,
    top: -2,
  },
});
