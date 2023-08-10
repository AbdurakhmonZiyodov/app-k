import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    width: 343,
    height: 96,
    borderRadius: 10,
    backgroundColor: COLORS.black05,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerCard: {
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: COLORS.black05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  DaoFavoriteCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: COLORS.green,
  },
  title: {
    color: COLORS.white,
    paddingVertical: 10,
  },
  daoImg: {
    width: 54,
    height: 54,
    marginLeft: -5,
  },
});
