import {COLORS} from 'constants/colors';
import RN from 'components/RN';

export const styles = RN.StyleSheet.create({
  arrowIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  nextbuttonbox: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
