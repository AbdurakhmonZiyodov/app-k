import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {scale, verticalScale} from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  leftSection: {},
  rightSection: {},
  centerSection: {},
  tabBarButtonsContainer: {
    backgroundColor: COLORS.darkTertiary,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  tabBarButtonText: {
    color: COLORS.white,
  },
  tabBarButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: scale(70),
    minHeight: verticalScale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabBarButton: {
    backgroundColor: COLORS.lightBlack2,
    borderRadius: 8,
  },
  badgeText: {
    color: COLORS.black,
    fontSize: verticalScale(8),
  },
  bandgeContainer: {
    width: scale(12),
    aspectRatio: 1,
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -4,
    top: -2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  circleListContainer: {
    paddingTop: 20,
  },
  sortFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  sortFilterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
