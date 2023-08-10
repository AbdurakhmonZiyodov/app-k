import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
    alignSelf: 'center',
    marginTop: -20,
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    alignSelf: 'center',
    marginHorizontal: 8,
    backgroundColor: COLORS.green,
  },
});
