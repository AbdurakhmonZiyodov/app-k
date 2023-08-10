import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {styles} from './ScreenTitle.style';

type Props = {
  title?: string;
  rightBtnTitle?: string;
  onRightBtnPress?(): void;
  style?: StyleProp<ViewStyle>;
};
const ScreenTitle: FC<Props> = ({
  title,
  rightBtnTitle,
  style,
  onRightBtnPress,
}) => (
  <RN.View style={[styles.constainer, style]}>
    <Text title={title} style={{color: COLORS.white}} type="headerTitle" />
    <RN.TouchableOpacity onPress={onRightBtnPress}>
      <Text
        title={rightBtnTitle}
        style={{color: '#9C9C9C'}}
        type="headerTitle"
      />
    </RN.TouchableOpacity>
  </RN.View>
);

export default ScreenTitle;
