import RN from 'components/RN/RN';
import {COLORS} from 'constants/colors';
import {addAlpha} from 'constants/constants';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerRight: {},
  oldPriceText: {
    textDecorationLine: 'line-through',
    paddingLeft: 8,
    paddingBottom: 4,
    color: COLORS.grey,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
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
  colorsContainer: {
    paddingBottom: 16,
  },
  coloredImagesContainer: {
    flexDirection: 'row',
    paddingTop: 11,
  },
  coloredImageBox: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    marginRight: 9,
  },
  activeColoredImageBox: {
    borderWidth: 3,
    borderColor: COLORS.green,
  },
  mySize: {
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 30,
    backgroundColor: COLORS.black2,
  },
  sizeScrollViewContainer: {
    paddingTop: 12,
    paddingBottom: 20,
  },
  sizeBox: {
    width: 36,
    aspectRatio: 1,
    borderRadius: 18,
    marginHorizontal: 15 / 2,
    backgroundColor: COLORS.black2,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSizeBox: {
    borderWidth: 1,
    borderColor: COLORS.green,
  },
  addButton: {
    backgroundColor: COLORS.green,
  },
  addButtonTitle: {
    color: COLORS.black,
  },
});
