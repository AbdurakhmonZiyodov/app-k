import {useRoute} from '@react-navigation/native';
import OtpVerify from 'components/OtpVerify';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {AppRouteType} from 'navigation/AppNavigator';
import {APP_ROUTES} from 'navigation/routes';
import {useState} from 'react';

const OtpVerifyOfCreateAccountScreen = () => {
  const [code, setCode] = useState('');
  const route = useRoute<AppRouteType<APP_ROUTES.otp_verify_of_login>>();
  const phone = route.params.phone || '';
  const length = route.params.tokenLength || 6;
  const createAccountWithPhoneStore =
    useRootStore().auth.createAccountWithPhone;

  return (
    <OtpVerify
      code={code}
      length={length}
      onChangeCode={setCode}
      onSubmit={() => createAccountWithPhoneStore.onSubmitOtp(phone, code)}
      onCodeFilled={val => {
        createAccountWithPhoneStore.onSubmitOtp(phone, val);
      }}
      phone={phone}
    />
  );
};

export default observer(OtpVerifyOfCreateAccountScreen);
