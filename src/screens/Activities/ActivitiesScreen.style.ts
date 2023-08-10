import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  screen: {
    backgroundColor: COLORS.black1,
    paddingBottom: 35,
    paddingHorizontal: 9,
    flex: 1,
  },
  headerRightStyle: {
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ScrollView: {
    flex: 0.3,
    paddingVertical: 18,
    flexGrow: 0,
    minHeight: 200,
  },
  container: {
    flex: 1,
  },
  leftIconStyle: {
    marginRight: 60,
  },
  widgetsView: {
    paddingVertical: 16,
  },
});
