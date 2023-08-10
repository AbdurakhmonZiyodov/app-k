import {COLORS} from 'constants/colors';
import RN from 'components/RN';
import SIZES from 'constants/sizes';
import {addAlpha} from 'constants/constants';
const IMAGE_WIDTH = SIZES.width;
export const styles = RN.StyleSheet.create({
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.82,
  },
  headerBottomTextsContainer: {
    top: IMAGE_WIDTH * 0.6,
    zIndex: 1,
  },
  bonusContainer: {
    position: 'absolute',
    left: 16,
    top: 50,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 30,
    justifyContent: 'space-between',
    minWidth: 80,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: addAlpha(COLORS.black2, 0.5),
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
