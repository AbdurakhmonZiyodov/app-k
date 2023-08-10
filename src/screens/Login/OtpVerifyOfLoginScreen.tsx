import {RouteProp, useRoute} from '@react-navigation/native';
import OtpVerify from 'components/OtpVerify';
import {observer} from 'mobx-react-lite';
import {RootStackParamList} from 'navigation/AppNavigator';
import {APP_ROUTES} from 'navigation/routes';
import {useState} from 'react';

const OtpVerifyOfLoginScreen = () => {
  const [code, setCode] = useState('');
  const route =
    useRoute<RouteProp<RootStackParamList, APP_ROUTES.otp_verify_of_login>>();
  const phone = route.params?.phone || '';

  return (
    <OtpVerify
      code={code}
      onChangeCode={setCode}
      onCodeFilled={val => console.log({val})}
      phone={phone}
    />
  );
};

export default observer(OtpVerifyOfLoginScreen);
