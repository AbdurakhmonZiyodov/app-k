import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: COLORS.black2,
    borderRadius: 10,
    marginTop: SIZES.height / 83,
    height: SIZES.height / 16.6,
  },

  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '80%',
  },
  centerCard: {},
  title: {
    color: '#BDBDBD',
    marginLeft: 15,
  },
  rightContent: {
    alignItems: 'center',
  },
});
