import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {ScrollViewPadding} from 'constants/constants';
import {VOTING_IMAGE_SIZE} from './VotingList.contants';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleText: {
    color: COLORS.white,
    paddingTop: 16,
  },
  votingImageContainer: {
    paddingLeft: 8,
  },

  votingItemImageShadow: {
    backgroundColor: COLORS.black4_2,
    position: 'absolute',
    width: VOTING_IMAGE_SIZE,
    height: VOTING_IMAGE_SIZE,
    borderRadius: 8,
    left: 8,
  },
  votingItemImage: {
    width: VOTING_IMAGE_SIZE,
    height: VOTING_IMAGE_SIZE,
    borderRadius: 8,
  },
  votingItemNameText: {
    color: COLORS.white,
    paddingLeft: 14,
  },
  votingItem: {
    backgroundColor: COLORS.black2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 10,
    minHeight: 120,
    overflow: 'hidden',
  },
  votingListContainer: {
    paddingTop: 10,
    ...ScrollViewPadding,
  },
  votingItemShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: -1,
  },
  textsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 13,
  },
  percentText: {
    color: COLORS.white,
  },
  votedContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  votingText: {
    color: COLORS.white,
  },
});
