import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: 36,
    maxHeight: 300,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  button: {
    backgroundColor: COLORS.green,
    marginTop: 12 * 2,
  },
  buttonText: {
    color: COLORS.black3,
  },
  inlineButton: {
    paddingTop: 12,
  },
  inlineButtonText: {
    color: COLORS.green,
  },
});
