import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import Header from 'components/Header';
import KeyboardAvoiding from 'components/KeyboardAvoiding';
import RN from 'components/RN';
import Field from 'components/UI/components/Field';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {ButtonType} from 'types';
import LoginMain from './components/LoginMain';
import {styles} from './LoginScreen.styles';

const ForgotPasswordWithPhoneScreen = () => {
  const store = useRootStore().auth.forgotPasswordWithPhone;
  const phoneInput = useRef<PhoneInput>(null);

  const phone = {
    countryCode: phoneInput.current?.getCountryCode(),
    countryCodeNumber: phoneInput.current?.getCallingCode(),
    phoneNumber: store.form.phone,
  };

  console.log({phone});

  return (
    <KeyboardAvoiding>
      <RN.View style={styles.container}>
        <Header />
        <LoginMain
          title="Forgot your password?"
          description="Enter your registered email below to receive password reset instruction"
          renderIcon={() => <ColoredIcons.EmailIcon width={30} />}
        />

        <RN.View style={styles.form}>
          <Field
            type="phone"
            ref={phoneInput}
            value={store.form.phone}
            onChangeText={e => store.changeValue(e, 'phone')}
          />
          <PrimaryButtonLarge
            onPress={store.onAsyncPress}
            title={'Send'}
            type={ButtonType.FILLED}
            style={styles.button}
            textPosition="center"
            titleStyle={styles.buttonText}
            isSmart
          />
        </RN.View>
      </RN.View>
    </KeyboardAvoiding>
  );
};

export default observer(ForgotPasswordWithPhoneScreen);
