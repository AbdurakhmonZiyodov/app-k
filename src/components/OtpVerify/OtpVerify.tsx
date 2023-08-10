import OTPInputView from '@twotalltotems/react-native-otp-input';
import RN from 'components/RN';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import {ButtonType} from 'types';
import {styles} from './OtpVerify.styles';

interface OtpVerifyProps {
  phone: string;
  code: string;
  onChangeCode?(value: string): void;
  onCodeFilled?(code: string): void;
  onSubmit?(): void;
  onSendAgain?(): void;
  length: number;
}

const OtpVerify: FC<OtpVerifyProps> = ({
  code,
  onChangeCode,
  onCodeFilled,
  phone,
  onSubmit,
  onSendAgain,
  length,
}) => {
  const renderWidthOtpInput = () => {
    if (length === 6) return 50;
    if (length === 4) return 56;
    return 50;
  };
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.otpContainer}>
        <RN.View style={styles.titleContainer}>
          <RN.Text style={styles.title}>
            We have sent the verification code to the phone number
            <RN.Text style={[styles.title, styles.phoneNumber]}>
              {' '}
              {phone}
            </RN.Text>
          </RN.Text>
        </RN.View>

        <OTPInputView
          style={styles.otpView}
          pinCount={length}
          code={code}
          onCodeChanged={onChangeCode}
          autoFocusOnLoad
          codeInputFieldStyle={{
            ...styles.codeInputField,
            ...{width: renderWidthOtpInput()},
          }}
          onCodeFilled={onCodeFilled}
        />

        <PrimaryButtonLarge
          title="Submit"
          titleStyle={styles.submitButtonTitle}
          style={styles.submitButton}
          textPosition={'center'}
          onPress={onSubmit}
          type={ButtonType.FILLED}
        />

        <Text
          title="Didn`t get the code?"
          type="regularFootnote2"
          style={styles.askQestion}
        />

        <RN.TouchableOpacity
          style={styles.sendAgainButton}
          onPress={onSendAgain}>
          <RN.Text style={[styles.title, styles.phoneNumber]}>
            Send again
          </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};
export default observer(OtpVerify);
