import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  timeToOver: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeToOverTitle: {
    color: COLORS.lightBlack2,
    textTransform: 'uppercase',
    paddingLeft: 6,
  },
  bottomTimeToover: {
    paddingVertical: 4,
  },
});
