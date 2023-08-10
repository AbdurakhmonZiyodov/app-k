import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  cardContainer: {
    // paddingBottom: 100,
  },
  linearGradentContainer: {
    width: SIZES.width * 0.45,
    borderRadius: 10,
  },
  cardImage: {
    width: SIZES.width * 0.45,
    height: SIZES.width * 0.32,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardFooter: {
    paddingLeft: 8,
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: COLORS.grey,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  carouselContainer: {
    paddingTop: 13,
  },
  carouselImage: {
    width: SIZES.width,
    height: SIZES.height * 0.31,
  },
  status: {
    position: 'absolute',
    zIndex: 1,
    left: 8,
    top: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 34,
  },
  basketIcon2Container: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 8,
    paddingBottom: 8,
  },
  basketIcon2: {
    width: 24,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  starIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 8,
    top: 8,
  },
});
