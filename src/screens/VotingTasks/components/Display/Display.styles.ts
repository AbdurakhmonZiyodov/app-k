import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    // overflow: 'hidden',
    minHeight: SIZES.height * 0.4,
  },
  logoImageContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  title: {
    color: COLORS.white,
    paddingTop: 14,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  votingTextContainer: {
    justifyContent: 'flex-end',
  },
  bannerContainer: {
    justifyContent: 'center',
  },
  votingText: {
    color: COLORS.white,
  },
  gradientContainerStyle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: -20,
  },
  displayFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 22,
  },
  descriptionContainer: {
    position: 'relative',
    top: 10,
  },
  description: {
    paddingHorizontal: 16,
    letterSpacing: 0.32,
    paddingTop: 25,
  },
});
