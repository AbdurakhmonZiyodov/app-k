import {useNavigation} from '@react-navigation/native';
import IProvider from 'components/IProvider';
import KeyboardAvoiding from 'components/KeyboardAvoiding';
import RN from 'components/RN';
import TopTabs from 'components/TopTabs';
import {COLORS} from 'constants/colors';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationType} from 'navigation/AppNavigator';
import {APP_ROUTES} from 'navigation/routes';
import {useCallback} from 'react';

import {styles} from './LoginScreen.styles';
import LoginWithEmail from './LoginWithEmail';
import LoginWithPhone from './LoginWithPhone';

const CreateAccountScreen = () => {
  const navigation = useNavigation<NavigationType>();
  const createAccountWithEmailStore =
    useRootStore().auth.createAccountWithEmail;
  const createAccountWithPhoneStore =
    useRootStore().auth.createAccountWithPhone;

  const navigateToNextScreen = useCallback(() => {
    navigation.navigate(APP_ROUTES.login);
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
                    title="Create an account"
                    bottomTitle="Didn`t have an account?"
                    inlineButtonTitle="Log in"
                    isLoadingOfButton={
                      createAccountWithEmailStore._operation.isInProgress
                    }
                    formButtonTitle="Create an account"
                    email={createAccountWithEmailStore.form.email}
                    password={createAccountWithEmailStore.form.password}
                    changeEmail={e =>
                      createAccountWithEmailStore.changeValue(e, 'email')
                    }
                    changePassword={e =>
                      createAccountWithEmailStore.changeValue(e, 'password')
                    }
                    formButtonPress={createAccountWithEmailStore.onAsyncPress}
                    inlineButtonPress={navigateToNextScreen}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum"
                  />
                ),
              },
              {
                id: 1,
                name: 'Phone number',
                component: (
                  <LoginWithPhone
                    title="Create an account"
                    bottomTitle="Didn`t have an account?"
                    inlineButtonTitle="Log in"
                    formButtonTitle="Create an account"
                    onPhoneChangeText={
                      createAccountWithPhoneStore.onPhoneChangeText
                    }
                    phone={createAccountWithPhoneStore.form.phone}
                    changePassword={e =>
                      createAccountWithPhoneStore.changeValue(e, 'password')
                    }
                    changePhone={e =>
                      createAccountWithPhoneStore.changeValue(e, 'phone')
                    }
                    password={createAccountWithPhoneStore.form.password}
                    formButtonPress={createAccountWithPhoneStore.onAsyncPress}
                    inlineButtonPress={navigateToNextScreen}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum"
                  />
                ),
              },
            ]}
          />
        </RN.View>
      </IProvider>
    </KeyboardAvoiding>
  );
};

export default observer(CreateAccountScreen);
