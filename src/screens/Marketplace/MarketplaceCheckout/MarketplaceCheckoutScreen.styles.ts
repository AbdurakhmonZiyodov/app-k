import RN from 'components/RN';
import {COLORS} from 'constants/colors';

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: 20,
    paddingHorizontal: 8,
  },
  headerCircleIcon: {
    width: 12,
    aspectRatio: 1,
    backgroundColor: COLORS.yellow,
    position: 'absolute',
    top: -2,
    right: -2,
    borderRadius: 12 / 2,
  },
  headerContainer: {
    backgroundColor: COLORS.black2,
  },
  paymentMethodContainer: {
    paddingVertical: 24,
    marginVertical: 12,
    borderTopColor: COLORS.secondary_80,
    borderBottomColor: COLORS.secondary_80,
    borderWidth: 0.5,
  },
  coinContainer: {
    paddingTop: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightArrow: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  orderInfoContainer: {},
  orderInfoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  buttonContainer: {
    backgroundColor: COLORS.green,
    marginTop: 42,
  },
  buttonText: {
    color: COLORS.black,
  },
});
