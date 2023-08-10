import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    borderRadius: 14,
    minHeight: 50,
    justifyContent: 'center',
  },
  filledContainer: {
    backgroundColor: COLORS.blue,
  },
  filledTextColor: {
    color: COLORS.white,
  },
  filledLabelColor: {
    color: COLORS.lightgrey,
  },
  outlinedLabelColor: {
    color: COLORS.secondary_60,
  },
  contentPadding: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  contentPaddingWithLabel: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  outlinedContainer: {
    borderWidth: 2.5,
    borderColor: COLORS.blue,
  },
  outlinedTextColor: {
    color: COLORS.blue,
  },
  shadedContainer: {
    backgroundColor: COLORS.lightgrey,
  },
});
