import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    marginTop: SIZES.height / 33,
  },
  card: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.black2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
