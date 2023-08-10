import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {addAlpha} from 'constants/constants';
import SIZES from 'constants/sizes';

const IMAGE_WIDTH = SIZES.width * 0.45;
export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  headerTopContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
  },
  headergradient: {
    bottom: -10,
    left: 0,
    right: 0,
  },
  text: {
    color: COLORS.white,
  },
  activeFilterText: {
    color: COLORS.green,
  },
  headerContainer: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 20,
  },
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.9,
  },
  headerBottomTextsContainer: {
    top: IMAGE_WIDTH + 50,
    zIndex: 1,
  },
  title: {
    alignSelf: 'center',
    paddingTop: 50,
    textTransform: 'uppercase',
  },
  headerDescription: {
    alignSelf: 'center',
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
  descriptionContainer: {
    paddingTop: 20,
    width: '90%',
  },
  mainContainer: {
    paddingHorizontal: 8,
    paddingTop: 10,
    flexGrow: 1,
  },
  filterButtonContainer: {
    paddingTop: 22,
  },
  filterButton: {
    backgroundColor: '#1B1B1B',
    paddingHorizontal: 17,
    paddingVertical: 4,
    borderRadius: 44,
    marginRight: 5,
  },
  filteredItemsContainer: {
    paddingTop: 20,
  },
  divider: {
    width: 10,
  },
  moreButton: {
    backgroundColor: COLORS.green,
  },
  moreButtonText: {
    color: COLORS.black,
  },
});
