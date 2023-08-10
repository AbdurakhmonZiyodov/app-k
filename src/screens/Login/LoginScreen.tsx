import {useNavigation} from '@react-navigation/native';
import KeyboardAvoiding from 'components/KeyboardAvoiding';
import RN from 'components/RN';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationType} from 'navigation/AppNavigator';
import {APP_ROUTES} from 'navigation/routes';
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import TopTabs from 'components/TopTabs';
import {styles} from './LoginScreen.styles';
import LoginWithEmail from './LoginWithEmail';
import LoginWithPhone from './LoginWithPhone';
import IProvider from 'components/IProvider';
import {COLORS} from 'constants/colors';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const loginWithEmailStore = useRootStore().auth.loginWithEmail;
  const loginWithPhoneStore = useRootStore().auth.loginWithPhone;
  const {t} = useTranslation();

  const navigateToCreateAccount = useCallback(() => {
    navigation.navigate(APP_ROUTES.create_account);
  }, [navigation]);

  const navigateToForgotPasswordWithEmail = useCallback(() => {
    navigation.navigate(APP_ROUTES.forgot_password_with_email);
  }, [navigation]);

  const navigateToForgotPasswordWithPhone = useCallback(() => {
    navigation.navigate(APP_ROUTES.forgot_password_with_phone);
  }, [navigation]);

  return (
    <KeyboardAvoiding>
      <IProvider style={styles.root} backgroundColor={COLORS.black1}>
        <RN.View style={styles.container}>
          <TopTabs
            data={[
              {
                id: 0,
                name: 'Email',
                component: (
                  <LoginWithEmail
                    title={t('welcome_text')}
                    bottomTitle="Didn`t have an account?"
                    inlineButtonTitle={t('create_account')}
                    formButtonTitle={t('Login')}
                    isLoadingOfButton={
                      loginWithEmailStore._operation.isInProgress
                    }
                    formButtonPress={loginWithEmailStore.onAsyncPress}
                    inlineButtonPress={navigateToCreateAccount}
                    description={t('description')}
                    outlinedButtonTitle="Forgot password?"
                    outlinedButtonPress={navigateToForgotPasswordWithEmail}
                    email={loginWithEmailStore.form.email}
                    password={loginWithEmailStore.form.password}
                    changeEmail={value =>
                      loginWithEmailStore.changeValue(value, 'email')
                    }
                    changePassword={value =>
                      loginWithEmailStore.changeValue(value, 'password')
                    }
                  />
                ),
              },
              {
                id: 1,
                name: 'Phone number',
                component: (
                  <LoginWithPhone
                    title="Welcome back Phone"
                    bottomTitle="Didn`t have an account?"
                    inlineButtonTitle={t('Create an account')}
                    formButtonTitle="Log in"
                    formButtonPress={loginWithPhoneStore.onAsyncPress}
                    onPhoneChangeText={loginWithPhoneStore.onPhoneChangeText}
                    inlineButtonPress={navigateToCreateAccount}
                    description={t('description')}
                    outlinedButtonTitle="Forgot password?"
                    outlinedButtonPress={navigateToForgotPasswordWithPhone}
                    phone={loginWithPhoneStore.form.phone}
                    password={loginWithPhoneStore.form.password}
                    changePhone={value =>
                      loginWithPhoneStore.changeValue(value, 'phone')
                    }
                    changePassword={value =>
                      loginWithPhoneStore.changeValue(value, 'password')
                    }
                  />
                ),
              },
            ]}
            position="top"
          />
        </RN.View>
      </IProvider>
    </KeyboardAvoiding>
  );
};

export default observer(LoginScreen);
