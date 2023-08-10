import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkTertiary,
    borderRadius: 7,
  },
  buttonText: {
    color: COLORS.white,
  },
  button: {
    paddingVertical: 6,
    borderRadius: 7,
    width: '50%',
  },
  activeButton: {
    backgroundColor: COLORS.lightBlack2,
  },
});
