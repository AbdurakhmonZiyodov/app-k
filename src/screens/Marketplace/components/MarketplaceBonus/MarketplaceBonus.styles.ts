import RN from 'components/RN';
import {COLORS} from 'constants/colors';

const rnStyles = RN.StyleSheet.create({
  topText: {
    color: COLORS.green,
  },
  hitText: {
    color: COLORS.white,
    lineHeight: 22,
  },
  discountText: {
    color: COLORS.black,
  },
  baseTextContainer: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 31,
    minHeight: 23,
    justifyContent: 'center',
  },
  topTextContainer: {
    backgroundColor: COLORS.black,
  },
  hitTextContainer: {
    backgroundColor: COLORS.red,
  },
  discountTextContainer: {
    backgroundColor: COLORS.yellow2,
  },
});

export const styles = {
  textContainerStyle: (type: 'TOP' | 'HIT' | 'DISCOUNT') => {
    if (type === 'TOP')
      return [rnStyles.baseTextContainer, rnStyles.topTextContainer];
    if (type === 'HIT')
      return [rnStyles.baseTextContainer, rnStyles.hitTextContainer];
    if (type === 'DISCOUNT')
      return [rnStyles.baseTextContainer, rnStyles.discountTextContainer];

    return [rnStyles.baseTextContainer];
  },
  textStyle: (type: 'TOP' | 'HIT' | 'DISCOUNT') => {
    if (type === 'TOP') return rnStyles.topText;
    if (type === 'HIT') return rnStyles.hitText;
    return rnStyles.discountText;
  },
};
