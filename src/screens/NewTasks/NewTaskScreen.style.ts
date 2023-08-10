import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';

export const styles = RN.StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  gradent: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bannerToken: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBackground: {
    zIndex: 1,
  },
  headerStyle: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
  },
  headerContent: {
    alignItems: 'center',
  },
  linearGradientContainer: {
    height: SIZES.height * 0.45,
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.white,
    textAlign: 'center',
    zIndex: 2,
    paddingTop: 30,
  },
  headerlogo: {
    width: 65,
    height: 60,
  },
  subtitle: {
    color: COLORS.green,
    zIndex: 2,
    paddingTop: 40,
  },
  aboutCard: {
    position: 'relative',
    top: -20,
  },
  aboutIcon: {
    position: 'absolute',
    top: 14,
    right: 5,
  },
  aboutTitle: {
    color: COLORS.grey,
    paddingBottom: 8,
  },
  aboutText: {
    color: COLORS.white,
    maxWidth: '80%',
    letterSpacing: 0.32,
    paddingTop: 23,
  },
  aprove: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 70,
  },
  screenTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  taskDataCard: {
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: COLORS.green,
    alignItems: 'center',
    flexGrow: 1,
    height: 40,
  },
  btnCard: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fileUpload: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: COLORS.green,
    borderRadius: 9,
    marginBottom: 12,
    paddingVertical: 20,
    height: 79,
  },
  fileUploadText: {
    color: COLORS.green,
  },
  inputStyle: {
    width: '100%',
    height: 105,
    backgroundColor: COLORS.black2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    color: COLORS.white,
  },
  container: {
    paddingHorizontal: 16,
  },
  likeIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.brown,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
