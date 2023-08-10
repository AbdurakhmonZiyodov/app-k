import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitleCard: {},
  headerRightView: {},
  headerLeftViewStyle: {},
  headerTitle: {
    color: COLORS.white,
  },
  tokenBalance: {
    borderWidth: 1,
    borderColor: COLORS.green,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  tokenbalanceTitle: {
    color: COLORS.green,
  },
  rightBtnTitle: {},
});
