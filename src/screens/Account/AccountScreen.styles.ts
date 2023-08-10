import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    width: '100%',
    paddingVertical: SIZES.height / 45,
    borderRadius: 10,
    color: COLORS.white,
    marginLeft: 17,
  },
  navigateMenu: {
    marginTop: SIZES.height / 34,
    backgroundColor: COLORS.black2,
    borderRadius: 10,
  },
});
