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
    width: SIZES.width * (isIPad ? 0.3 : 0.4),
    aspectRatio: 1,
    borderRadius: SIZES.width * (isIPad ? 0.3 : 0.4) * 0.5,
    backgroundColor: '#313131',
    zIndex: 11,
    position: 'absolute',
  },
  card: {
    alignItems: 'center',
    zIndex: 11,
  },
  title: {
    color: COLORS.white,
  },
  img: {
    width: SIZES.width / 3.6,
    height: SIZES.height / 7.8,
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
