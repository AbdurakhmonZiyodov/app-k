import {Icons} from 'assets/icons';
import RN from 'components/RN';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {styles} from './AuthButton.styles';

type AuthType = 'google' | 'facebook' | 'apple';

interface AuthButtonProps {
  onPress?(): void;
  type: AuthType;
  containerStyle?: StyleProp<ViewStyle>;
}

function renderIcon(type: AuthType) {
  switch (type) {
    case 'apple':
      return {
        Icon: Icons.AppleAuthIcon,
        width: 18,
      };
    case 'facebook':
      return {
        Icon: Icons.FacebookAuthIcon,
        width: 11,
      };

    default:
      return {
        Icon: Icons.GoogleAuthIcon,
        width: 20,
      };
  }
}

const AuthButton: FC<AuthButtonProps> = ({type, onPress, containerStyle}) => {
  const Icon = renderIcon(type);

  return (
    <RN.TouchableOpacity
      style={[styles.root, containerStyle]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Icon.Icon width={Icon.width} />
    </RN.TouchableOpacity>
  );
};

export default observer(AuthButton);
