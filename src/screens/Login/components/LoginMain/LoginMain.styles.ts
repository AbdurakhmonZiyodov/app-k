import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    paddingBottom: 8,
    paddingTop: 24,
  },
  descriptionContainer: {
    paddingHorizontal: 30,
  },
  description: {
    color: COLORS.white,
  },
});
