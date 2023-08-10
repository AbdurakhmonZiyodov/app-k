import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES, {scale} from 'constants/sizes';

const isIPad = SIZES.width > 400;

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  scroolView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.transparent,
    zIndex: 12,
  },

  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.width / (isIPad ? 4.3 : 7.3),
    marginVertical: SIZES.height / 35.3,
    paddingTop: isIPad ? 30 : 0,
    fontSize: isIPad ? 54 : 34,
    letterSpacing: 0.37,
  },
  logoTitleCard: {
    marginLeft: 13,
  },
  logoTitle: {
    color: COLORS.white,
    fontSize: isIPad ? 45 : 25,
    fontWeight: '900',
    paddingTop: isIPad ? 40 : 20,
    paddingBottom: 3,
  },
  logoSubtitle: {
    color: COLORS.white,
    fontSize: isIPad ? 14 : 6,
    marginTop: -10,
  },

  ellipseView: {
    width: scale(678),
    aspectRatio: 1,
    borderRadius: SIZES.width * 678 * 0.5,
    backgroundColor: '#2C2C2C',
    top: isIPad ? SIZES.height * 0.7 : SIZES.height * 0.65,
    left: SIZES.width / -2.1,
    position: 'absolute',
    zIndex: 1,
  },
  animationcard: {
    height: isIPad ? 800 : 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rewardCards: {
    width: SIZES.width,
    paddingHorizontal: 15,
    marginTop: isIPad ? 20 : 100,
    zIndex: 11,
  },
  rewardCard: {
    backgroundColor: '#1B1B1B',
    borderWidth: 1,
    borderColor: `rgba(54, 54, 54, 0.8)`,
  },
  appLogo: {},
});
