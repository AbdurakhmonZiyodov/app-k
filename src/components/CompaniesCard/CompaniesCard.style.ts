import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {verticalScale} from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    width: 158,
    height: 159,
    borderRadius: 6,
    marginHorizontal: 6,
    padding: 5,
    justifyContent: 'center',
  },
  logoStyles: {
    width: 98,
    height: 85,
  },
  logoCard: {
    height: 120,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  brandName: {
    color: COLORS.white,
    marginBottom: 10,
    fontSize: verticalScale(14),
    lineHeight: verticalScale(20),
  },
  brandNameCard: {},
});
