import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  titlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    paddingLeft: 8,
    textDecorationLine: 'line-through',
    color: COLORS.grey,
  },
  descriptionContainer: {
    paddingTop: 24,
    width: '70%',
  },
  addButton: {
    marginTop: 42,
    backgroundColor: COLORS.green,
  },
  addButtonText: {
    color: COLORS.black,
  },
});
