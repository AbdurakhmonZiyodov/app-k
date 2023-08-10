import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {FontName} from 'constants/typography';

export const styles = RN.StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: COLORS.black2,
    borderWidth: 1,
    borderColor: COLORS.black2,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    height: 50,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FontName[400],
    backgroundColor: COLORS.transparent,
    flexGrow: 1,
    height: 40,
    color: COLORS.white,
  },
  inputContainer: {
    backgroundColor: COLORS.transparent,
    flexGrow: 1,
  },
  codeTextStyle: {
    color: COLORS.white,
  },
  activeEye: {
    paddingTop: 4,
  },
  flagButtonStyle: {
    width: 50,
    height: 40,
    alignSelf: 'center',
  },
});
