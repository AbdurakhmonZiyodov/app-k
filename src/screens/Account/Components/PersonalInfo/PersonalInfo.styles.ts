import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height / 34,
  },
  avatarView: {
    width: SIZES.width / 5.8,
    height: SIZES.height / 12.5,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    marginTop: SIZES.height / 116,
  },
  subtitle: {
    color: COLORS.grey,
    marginTop: 5,
  },
});
