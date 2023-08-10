import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  flexOne: {
    flexGrow: 1,
    backgroundColor: COLORS.black1,
    paddingHorizontal: SIZES.width / 23.5,
  },
  renderBtn: {
    marginBottom: SIZES.height / 14,
    marginTop: 40,
  },
  content: {
    paddingHorizontal: SIZES.height / 34,
  },
  logOutBtn: {
    height: 50,
    width: '100%',
    display: 'flex',
    borderRadius: 10,
    marginBottom: SIZES.height / 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey,
  },
  logoutBtnTitle: {
    color: COLORS.black,
    marginLeft: 9,
  },
  childrenView: {
    flex: 1,
  },
  headerStyle: {
    marginLeft: SIZES.width / -20,
  },
});
