import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  lineAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.black2,
    flexGrow: 1,
  },
  orText: {
    color: COLORS.lightBlack,
    paddingLeft: 18,
    paddingRight: 10,
    // paddingHorizontal: 25,
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authButtonContainer: {
    marginHorizontal: 3,
  },
  createAccountContainer: {
    paddingTop: 50,
  },
  subTitle: {
    color: COLORS.white,
    opacity: 0.7,
  },
  inlineButton: {
    paddingTop: 10,
  },
  inlineButtonText: {
    color: COLORS.green,
  },
});
