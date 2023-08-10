import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {},
  titleText: {
    color: COLORS.lightBlack,
    paddingTop: 24,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  descriptionText: {
    color: COLORS.white,
    width: '75%',
  },
  likeContainer: {
    flex: 1,
    top: (-SIZES.width * 0.15) / 2,
  },
  peopleVote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  peopleVoteText: {
    color: COLORS.lightBlack,
  },
});
