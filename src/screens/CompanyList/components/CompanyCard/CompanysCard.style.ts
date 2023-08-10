import RN from 'components/RN';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  ScrollView: {
    flex: 0.3,
    paddingVertical: 18,
    flexGrow: 0,
    minHeight: 200,
  },
  cardContainer: {
    width: SIZES.width * 0.4,
    maxWidth: 250,
  },
});
