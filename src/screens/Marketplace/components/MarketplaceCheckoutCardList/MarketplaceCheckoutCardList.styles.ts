import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {},
  cardContainer: {
    padding: 8,
    flexDirection: 'row',
    backgroundColor: COLORS.black2,
    borderRadius: 10,
    marginVertical: 6,
  },
  cardImage: {
    width: 96,
    height: 89,
    borderRadius: 5,
  },
  mainOfCard: {
    flex: 1,
  },
  textsContainer: {
    flex: 1,
    paddingLeft: 9,
  },
  deleteButtonContainer: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
  },
  deleteButton: {
    width: 32,
    aspectRatio: 1,
    backgroundColor: COLORS.grey2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  coinIconContainer: {
    paddingTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
