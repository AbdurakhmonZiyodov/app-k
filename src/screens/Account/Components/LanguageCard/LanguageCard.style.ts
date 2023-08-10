import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    padding: 13,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black2,
    borderRadius: 10,
    marginTop: SIZES.height / 34,
  },
  country: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImg: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  title: {
    color: COLORS.white,
    marginLeft: 15,
  },
});
