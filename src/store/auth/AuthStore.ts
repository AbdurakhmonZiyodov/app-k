import {makeAutoObservable} from 'mobx';
import GoogleAuth from './google';
import FacebookAuth from './facebook';
import LoginWithEmailAuth from './login-with-email';
import LoginWithPhoneAuth from './login-with-phone';
import CreateAccountWithEmailAuth from './create-account-with-email';
import CreateAccountWithPhoneAuth from './create-account-with-phone';
import ForgotPasswordWithEmailAuth from './forgot-password-with-email';
import ForgotPasswordWithPhoneAuth from './forgot-password-with-phone';
import {RootStore} from 'store/rootStore';
import AppleIdAuth from './apple-id/AppleIdAuth';

export default class AuthStore {
  private readonly root: RootStore;
  google: GoogleAuth;
  facebook: FacebookAuth;
  appleId: AppleIdAuth;
  loginWithEmail: LoginWithEmailAuth;
  loginWithPhone: LoginWithPhoneAuth;
  createAccountWithEmail: CreateAccountWithEmailAuth;
  createAccountWithPhone: CreateAccountWithPhoneAuth;
  forgotPasswordWithEmail: ForgotPasswordWithEmailAuth;
  forgotPasswordWithPhone: ForgotPasswordWithPhoneAuth;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;

    this.google = new GoogleAuth(root);
    this.facebook = new FacebookAuth(root);
    this.appleId = new AppleIdAuth(root);
    this.loginWithEmail = new LoginWithEmailAuth(root);
    this.loginWithPhone = new LoginWithPhoneAuth(root);
    this.createAccountWithEmail = new CreateAccountWithEmailAuth(root);
    this.createAccountWithPhone = new CreateAccountWithPhoneAuth(root);
    this.forgotPasswordWithEmail = new ForgotPasswordWithEmailAuth(root);
    this.forgotPasswordWithPhone = new ForgotPasswordWithPhoneAuth(root);
  }
}
