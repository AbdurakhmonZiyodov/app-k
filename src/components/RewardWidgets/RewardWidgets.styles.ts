import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    height: 178,
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.black05,
    alignSelf: 'center',
    padding: 16,
    marginBottom: 10,
  },
  topBannarCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerBannerCard: {
    maxWidth: '80%',
    height: '55%',
  },
  centerCardTitle: {
    color: COLORS.white,
    paddingVertical: 16,
  },
  logo: {
    width: 30,
    height: 30,
  },
});
