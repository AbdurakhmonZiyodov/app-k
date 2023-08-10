import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

const isIPad = SIZES.width > 400;
export const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * (isIPad ? 0.2 : 0.25),
    aspectRatio: 1,
    borderRadius: SIZES.width * (isIPad ? 0.2 : 0.25) * 0.5,
    backgroundColor: '#313131',
  },
  card: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
  },
  img: {
    width: 48,
    height: 48,
  },
});
