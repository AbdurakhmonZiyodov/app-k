import RN from 'components/RN';
import {COLORS} from 'constants/colors';
export const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 97,
    backgroundColor: COLORS.black2,
  },
  circleBtn: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#262D29',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderColor: COLORS.green,
    marginBottom: 5,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subtitle: {
    color: '#828282',
  },
  imageSize: {width: 34, height: 31},
});
