import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {isAndroid} from 'utils/platforms';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: isAndroid ? 20 : 10,
  },
  buttonContainer: {
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
    flex: 1,
  },
  activeButton: {
    backgroundColor: COLORS.lightBlack2,
  },
});
