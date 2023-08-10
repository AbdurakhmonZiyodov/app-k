import RN from 'components/RN/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    height: SIZES.height * 0.55,
    backgroundColor: COLORS.white2,
    justifyContent: 'flex-end',
  },
  linearGradientContainer: {
    height: SIZES.height * 0.17,
    // backgroundColor: COLORS.white2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  bonusContainer: {
    position: 'absolute',
    top: 50,
    left: 16,
  },
  carouselImageContainer: {
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width: '90%',
    // height: '90%',
    alignSelf: 'center',
  },
  textsContainer: {
    position: 'absolute',
    bottom: 24,
    zIndex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
