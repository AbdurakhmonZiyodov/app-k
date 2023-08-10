import {COLORS} from 'constants/colors';
import RN from 'components/RN';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 120,
  },
});
