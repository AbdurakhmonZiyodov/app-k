import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    left: 0,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  notificationContainer: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.white,
  },
  buttonLabel: {
    color: COLORS.white,
  },
  closeButtonContainer: {
    marginTop: 3,
    marginLeft: 5,
  },
});
