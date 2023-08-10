import RN from 'components/RN';
import {StatusBar} from 'react-native';
import {isIOS} from 'utils/platforms';

const height = StatusBar.currentHeight;
const currentHeight = isIOS ? 37 : 20;

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    top: height || currentHeight,
  },
});
