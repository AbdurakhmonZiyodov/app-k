import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {verticalScale} from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  badgeText: {
    color: COLORS.black,
    fontSize: verticalScale(8),
  },
});
