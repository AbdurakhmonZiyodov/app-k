import RN from 'components/RN';
import Field from 'components/UI/components/Field';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {ButtonType, Phone} from 'types';
import {styles} from './LoginForm.styles';

export interface LoginFormProps {
  isPhone?: boolean;
  isEmail?: boolean;
  formButtonTitle: string;
  formButtonPress?(): void;
  outlinedButtonTitle?: string;
  outlinedButtonPress?(): void;
  onPhoneChangeText?(phone: Phone): void;
  phone?: string;
  email?: string;
  password?: string;
  changePhone?(value: string): void;
  changeEmail?(value: string): void;
  changePassword?(value: string): void;
  isLoadingOfButton?: boolean;
  isSmart?: boolean;
}

const LoginForm: FC<LoginFormProps> = ({
  isEmail = false,
  isPhone = false,
  formButtonTitle,
  formButtonPress,
  outlinedButtonPress,
  outlinedButtonTitle,
  phone,
  email,
  password,
  changeEmail,
  changePassword,
  changePhone,
  isLoadingOfButton,
  isSmart,
  onPhoneChangeText,
}) => {
  const renderPhoneForm = () => (
    <>
      <RN.View style={styles.inputContainer}>
        <Field
          type="phone"
          value={phone}
          onChangeText={changePhone}
          onPhoneChangeText={onPhoneChangeText}
        />
      </RN.View>
      <RN.View style={styles.inputContainer}>
        <Field
          type="password"
          value={password}
          onChangeText={changePassword}
          placeholder="Password"
        />
      </RN.View>
    </>
  );

  const renderEmailForm = () => (
    <>
      <RN.View style={styles.inputContainer}>
        <Field
          type="text"
          value={email}
          onChangeText={changeEmail}
          placeholder="Email"
        />
      </RN.View>
      <RN.View style={styles.inputContainer}>
        <Field
          type="password"
          value={password}
          onChangeText={changePassword}
          placeholder="Password"
        />
      </RN.View>
    </>
  );

  return (
    <RN.View style={styles.container}>
      {isEmail && !isPhone && renderEmailForm()}
      {isPhone && !isEmail && renderPhoneForm()}

      <PrimaryButtonLarge
        onPress={formButtonPress}
        title={formButtonTitle}
        type={ButtonType.FILLED}
        style={styles.button}
        textPosition="center"
        titleStyle={styles.buttonText}
        isSmart={isSmart || false}
        isLoading={isLoadingOfButton || false}
      />

      <RN.TouchableOpacity
        style={styles.inlineButton}
        onPress={() => outlinedButtonPress && outlinedButtonPress()}>
        <Text
          type="regularFootnote2"
          title={outlinedButtonTitle}
          style={styles.inlineButtonText}
          textPosition="center"
        />
      </RN.TouchableOpacity>
    </RN.View>
  );
};
export default observer(LoginForm);
