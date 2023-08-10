import RN from 'components/RN';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import LoginFooter from './components/LoginFooter';
import {LoginFooterProps} from './components/LoginFooter/LoginFooter';
import LoginForm from './components/LoginForm';
import {LoginFormProps} from './components/LoginForm/LoginForm';
import LoginMain from './components/LoginMain';
import {LoginMainProps} from './components/LoginMain/LoginMain';

type LoginWithEmailProps = LoginMainProps & LoginFooterProps & LoginFormProps;

const LoginWithEmail: FC<LoginWithEmailProps> = ({
  title,
  description,
  renderIcon,
  bottomTitle,
  inlineButtonPress,
  inlineButtonTitle,
  formButtonTitle,
  formButtonPress,
  outlinedButtonPress,
  outlinedButtonTitle,
  changeEmail,
  changePassword,
  changePhone,
  email,
  password,
  phone,
  isLoadingOfButton,
  isSmart,
}) => (
  <RN.ScrollView
    // contentContainerStyle={styles.scrollViewContainer}
    nestedScrollEnabled={true}>
    <LoginMain
      title={title}
      description={description}
      renderIcon={renderIcon}
    />
    <LoginForm
      isEmail
      formButtonTitle={formButtonTitle}
      formButtonPress={formButtonPress}
      outlinedButtonPress={outlinedButtonPress}
      outlinedButtonTitle={outlinedButtonTitle}
      changeEmail={changeEmail}
      changePassword={changePassword}
      changePhone={changePhone}
      email={email}
      password={password}
      phone={phone}
      isLoadingOfButton={isLoadingOfButton}
      isSmart={isSmart}
    />
    <LoginFooter
      bottomTitle={bottomTitle}
      inlineButtonTitle={inlineButtonTitle}
      inlineButtonPress={inlineButtonPress}
    />
  </RN.ScrollView>
);

export default observer(LoginWithEmail);
