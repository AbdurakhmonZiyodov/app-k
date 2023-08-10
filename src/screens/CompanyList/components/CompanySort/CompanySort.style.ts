import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {},
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  sortBtn: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.darkTertiary,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnTitle: {
    color: COLORS.white,
  },
  closeBtn: {
    backgroundColor: COLORS.red,
    width: '100%',
    height: 40,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    flexDirection: 'row',
  },
  closeBtnTitle: {
    color: COLORS.white,
  },
});
