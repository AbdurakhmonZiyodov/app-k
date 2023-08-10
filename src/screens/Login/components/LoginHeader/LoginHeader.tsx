import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {forwardRef} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './LoginHeader.styles';

interface LoginHeaderProps {
  isButtons?: boolean;
  isBack?: boolean;
  checkButton?: 'email' | 'phone';
  phoneButtonPress?(): void;
  emailButtonPress?(): void;
}

export interface LoginHeaderRefProps {}

const LoginHeader = forwardRef<LoginHeaderRefProps, LoginHeaderProps>(
  ({isButtons = false, checkButton, emailButtonPress, phoneButtonPress}) => {
    const renderButtons = () => (
      <RN.View style={styles.buttonsContainer}>
        <RN.TouchableOpacity
          style={[
            styles.button,
            checkButton === 'email' && styles.activeButton,
          ]}
          onPress={emailButtonPress}>
          <Text
            title="Email"
            type="boldLoginButtonTitle"
            textPosition="center"
            style={styles.buttonText}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity
          style={[
            styles.button,
            checkButton === 'phone' && styles.activeButton,
          ]}
          onPress={phoneButtonPress}>
          <Text
            title="Phone number"
            type="boldLoginButtonTitle"
            textPosition="center"
            style={styles.buttonText}
          />
        </RN.TouchableOpacity>
      </RN.View>
    );

    return (
      <Animated.View style={styles.container}>
        {isButtons && renderButtons()}
      </Animated.View>
    );
  },
);

LoginHeader.displayName = 'LoginHeader';
export default LoginHeader;
