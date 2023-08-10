import {COLORS} from 'constants/colors';
import SIZES, {verticalScale} from 'constants/sizes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black2,
    alignItems: 'center',
  },
  form: {
    padding: 20,
  },
  input: {
    borderColor: COLORS.blue,
    borderWidth: 1,
    paddingVertical: 10,
    fontSize: 15,
    paddingLeft: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  imagebox: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: SIZES.width * 0.9,
    maxWidth: 600,
    height: SIZES.height * 0.8,
  },
  title: {
    color: COLORS.white,
  },
  subtitle: {
    color: COLORS.white,
    padding: 12,
    opacity: 0.7,
  },
  textsContainer: {
    marginTop: verticalScale(100),
  },
});
