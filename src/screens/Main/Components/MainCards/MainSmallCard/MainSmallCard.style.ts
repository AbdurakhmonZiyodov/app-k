import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
const isIPad = SIZES.width > 400;
export const styles = RN.StyleSheet.create({
  container: {
    margin: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * (isIPad ? 0.12 : 0.19),
    aspectRatio: 1,
    borderRadius: SIZES.width * (isIPad ? 0.12 : 0.19) * 0.5,
    backgroundColor: '#313131',
  },
  card: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
  },
  img: {
    width: 42,
    height: 42,
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
