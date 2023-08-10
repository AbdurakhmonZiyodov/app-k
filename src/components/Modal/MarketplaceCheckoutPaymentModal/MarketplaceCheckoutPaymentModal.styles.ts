import {COLORS} from 'constants/colors';
import RN from 'components/RN';

export const styles = RN.StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 8,
    backgroundColor: COLORS.transparent,
  },
  contentStyle: {
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  itemContainer: {
    paddingVertical: 19,
    paddingHorizontal: 26,
    borderTopColor: COLORS.black1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLORS.black2,
  },
  footerContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.transparent,
    paddingTop: 20,
    paddingBottom: 50,
  },
  buttonContainer: {
    backgroundColor: COLORS.green,
  },
  buttonText: {
    color: COLORS.black,
  },
  checkboxContainer: {
    position: 'absolute',
    right: 22,
  },
});
