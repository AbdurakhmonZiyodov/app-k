import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {scale} from 'constants/sizes';

const BUTTON_SIZE = Math.min(scale(60), 110);

export const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 20,
    backgroundColor: COLORS.transparent,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonLabel: {
    color: COLORS.black4,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },

  centeredButtonContainer: {
    width: BUTTON_SIZE,
    aspectRatio: 1,
  },
  centeredButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: COLORS.black2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: BUTTON_SIZE * 0.3,
  },
  renderTabBarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonActive: {
    color: COLORS.green,
  },
  backgroundIconLine: {
    position: 'absolute',
    // left: -SIZES.width * 0.05,
    right: 0,
    // bottom: -0,
    zIndex: -1,
  },
});
