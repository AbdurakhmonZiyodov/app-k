import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black1,
    paddingHorizontal: 16,
  },
  searchInput: {
    marginBottom: 15,
  },
  searchInputIcon: {
    marginRight: 6,
  },
  sortItem: {
    flexDirection: 'row',
  },
  sortItemText: {
    color: COLORS.white,
    paddingLeft: 8,
  },
  sortHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: COLORS.secondary_80,
    borderBottomWidth: 0.5,
  },
  companys: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 16,
  },
  companyItem: {
    paddingVertical: 8,
  },
  companyItemContainer: {
    width: SIZES.width / 2 - 30,
    height: SIZES.width / 2 - 30,
  },
});
