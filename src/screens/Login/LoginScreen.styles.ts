import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  root: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.black1,
    width: '100%',
    height: '100%',
    maxWidth: 550,
    maxHeight: 950,
    alignSelf: 'center',
  },

  form: {
    paddingTop: 48,
  },
  button: {
    backgroundColor: COLORS.green,
    marginTop: 12 * 2,
  },
  buttonText: {
    color: COLORS.black3,
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
