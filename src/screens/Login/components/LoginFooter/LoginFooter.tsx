import AuthButton from 'components/AuthButton';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import {isIOS} from 'utils/platforms';
import {styles} from './LoginFooter.styles';

export type LoginFooterProps = {
  bottomTitle: string;
  inlineButtonTitle: string;
  inlineButtonPress(): void;
};

const LoginFooter: FC<LoginFooterProps> = ({
  bottomTitle,
  inlineButtonPress,
  inlineButtonTitle,
}) => {
  const auth = useRootStore().auth;
  return (
    <RN.View style={styles.container}>
      {/* Line */}
      <RN.View style={styles.lineAndTextContainer}>
        <RN.View style={styles.line} />
        <Text
          title="or"
          type="regularCaption1"
          style={styles.orText}
          textPosition={'center'}
        />
        <RN.View style={styles.line} />
      </RN.View>

      {/* Auth buttons */}
      <RN.View style={styles.authContainer}>
        <AuthButton
          type="google"
          containerStyle={styles.authButtonContainer}
          onPress={auth.google.login}
        />
        {isIOS && (
          <AuthButton
            type="apple"
            onPress={auth.appleId.login}
            containerStyle={styles.authButtonContainer}
          />
        )}
        <AuthButton
          type="facebook"
          containerStyle={styles.authButtonContainer}
          onPress={auth.facebook.login}
        />
      </RN.View>

      {/* Create account */}
      <RN.View style={styles.createAccountContainer}>
        <Text
          title={bottomTitle}
          type="regularFootnote2"
          style={styles.subTitle}
          textPosition="center"
        />
        <RN.TouchableOpacity
          style={styles.inlineButton}
          onPress={inlineButtonPress}>
          <Text
            type="regularFootnote2"
            title={inlineButtonTitle}
            style={styles.inlineButtonText}
            textPosition="center"
          />
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

export default observer(LoginFooter);
