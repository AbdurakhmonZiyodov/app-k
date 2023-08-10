import {useNavigation} from '@react-navigation/native';
import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import Header from 'components/Header';
import IProvider from 'components/IProvider';
import KeyboardAvoiding from 'components/KeyboardAvoiding';
import RN from 'components/RN';
import Field from 'components/UI/components/Field';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationType} from 'navigation/AppNavigator';
import {useCallback} from 'react';
import {ButtonType} from 'types';
import LoginMain from './components/LoginMain';

import {styles} from './LoginScreen.styles';
const ForgotPasswordWithEmailScreen = () => {
  const store = useRootStore().auth.forgotPasswordWithEmail;
  const navigation = useNavigation<NavigationType>();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <KeyboardAvoiding>
      <IProvider>
        <RN.View style={styles.container}>
          <Header leftIcon="ArrowLeft" onLeftIconPress={goBack} />
          <LoginMain
            title="Forgot your password?"
            description="Enter your registered email below to receive password reset instruction"
            renderIcon={() => <ColoredIcons.EmailIcon width={30} />}
          />

          <RN.View style={styles.form}>
            <Field
              type="text"
              placeholder="Email"
              value={store.form.email}
              onChangeText={e => store.changeValue(e, 'email')}
            />
            <PrimaryButtonLarge
              onPress={store.onAsyncPress}
              title={'Send'}
              type={ButtonType.FILLED}
              style={styles.button}
              textPosition="center"
              titleStyle={styles.buttonText}
            />
          </RN.View>
        </RN.View>
      </IProvider>
    </KeyboardAvoiding>
  );
};

export default observer(ForgotPasswordWithEmailScreen);
