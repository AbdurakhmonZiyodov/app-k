import {COLORS} from 'constants/colors';
import RN from 'components/RN';
import {FontName} from 'constants/typography';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black1,
    paddingHorizontal: 16,
  },
  otpContainer: {
    paddingTop: 65,
  },
  otpView: {
    width: '90%',
    height: 120,
    alignSelf: 'center',
  },
  codeInputField: {
    width: 62,
    height: 50,
    borderWidth: 0,
    backgroundColor: COLORS.black2,
    borderRadius: 10,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  submitButton: {
    flexGrow: 1,
    backgroundColor: COLORS.green,
  },
  submitButtonTitle: {
    color: COLORS.black3,
  },
  titleContainer: {
    paddingHorizontal: SIZES.width * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: FontName[400],
    color: COLORS.white,
  },
  phoneNumber: {
    color: COLORS.green,
  },
  askQestion: {
    color: COLORS.white,
    opacity: 0.7,
    alignSelf: 'center',
    paddingTop: 24,
  },
  sendAgainButton: {
    alignSelf: 'center',
    paddingTop: 7,
  },
});
