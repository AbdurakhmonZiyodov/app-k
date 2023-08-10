import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    maxWidth: SIZES.width / 3.5,
    minWidth: SIZES.width / 3.3,
  },
  peopleAprove: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  aproveTitle: {
    color: COLORS.lightBlack2,
    textTransform: 'uppercase',
    paddingLeft: 6,
  },
  aproveSubtitle: {
    color: COLORS.lightgrey,
  },
  bottomAprove: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  peopleAproveImages: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  imageStyle: {
    width: 16,
    height: 16,
    position: 'absolute',
  },
  aproveCount: {
    left: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    color: COLORS.black3,
  },
});
