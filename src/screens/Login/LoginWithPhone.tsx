import RN from 'components/RN';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import LoginFooter from './components/LoginFooter';
import {LoginFooterProps} from './components/LoginFooter/LoginFooter';
import LoginForm from './components/LoginForm';
import {LoginFormProps} from './components/LoginForm/LoginForm';
import LoginMain from './components/LoginMain';
import {LoginMainProps} from './components/LoginMain/LoginMain';
import {styles} from './LoginScreen.styles';

type LoginWithPhoneProps = LoginMainProps & LoginFooterProps & LoginFormProps;

const LoginWithPhone: FC<LoginWithPhoneProps> = ({
  title,
  description,
  renderIcon,
  bottomTitle,
  inlineButtonPress,
  inlineButtonTitle,
  formButtonTitle,
  formButtonPress,
  outlinedButtonTitle,
  outlinedButtonPress,
  changePhone,
  changePassword,
  phone,
  password,
  onPhoneChangeText,
}) => (
  <RN.ScrollView
    contentContainerStyle={styles.scrollViewContainer}
    nestedScrollEnabled={true}>
    <LoginMain
      title={title}
      description={description}
      renderIcon={renderIcon}
    />
    <LoginForm
      isPhone
      formButtonTitle={formButtonTitle}
      formButtonPress={formButtonPress}
      outlinedButtonPress={outlinedButtonPress}
      outlinedButtonTitle={outlinedButtonTitle}
      changePhone={changePhone}
      changePassword={changePassword}
      password={password}
      onPhoneChangeText={onPhoneChangeText}
      phone={phone}
    />
    <LoginFooter
      bottomTitle={bottomTitle}
      inlineButtonPress={inlineButtonPress}
      inlineButtonTitle={inlineButtonTitle}
    />
  </RN.ScrollView>
);

export default observer(LoginWithPhone);
