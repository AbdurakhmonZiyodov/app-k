import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
import NavigationService from 'navigation/NavigationService';
import {APP_ROUTES} from 'navigation/routes';
import {IdentityService, LoginResponse} from 'services/api';
import {RootStore} from 'store/rootStore';
import {Phone} from 'types';
import {Operation} from 'utils/Operation';

type Form = {
  phone: string;
  password: string;
};

const initialForm: Form = {
  phone: '',
  password: '',
};

type LoginPost = {
  accessToken?: string;
  newAccount: boolean;
  required2Fa: boolean;
  login2FaDetails: {
    validUntil: string;
    tokenLength: number;
  };
};

export default class CreateAccountWithPhoneAuth {
  private readonly root: RootStore;
  form: Form = initialForm;
  phoneInput: Phone = {
    countryCode: 'UA',
    countryCodeNumber: '380',
    phoneNumber: '',
  };
  _loginPostOperation = new Operation<LoginPost>({} as LoginPost);
  _otpPostOperation = new Operation<LoginResponse>({} as LoginResponse);

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  changeValue = (value: string, key: keyof Form) => {
    this.form[key] = value;
  };

  onPhoneChangeText = (phone: Phone) => {
    this.phoneInput = phone;
  };

  onSubmitOtp = async (phoneNumber: string, code: string) => {
    await this._otpPostOperation.run(() =>
      IdentityService.confirmPhone(phoneNumber, code),
    );

    if (this._otpPostOperation.isSuccess) {
      this.root._token._set(this._otpPostOperation.data.accessToken as string);
    }
  };

  clearValues = () => {
    this.form = initialForm;
  };

  private onSuccess = (fullNumber: string) => {
    NavigationService.navigate(APP_ROUTES.otp_verify_of_create_account, {
      phone: fullNumber,
      tokenLength: this._loginPostOperation.data.login2FaDetails.tokenLength,
    });

    this.clearValues();
  };

  onAsyncPress = async () => {
    const {phone, password} = this.form;
    const fullNumber = `+${this.phoneInput.countryCodeNumber}${phone}`;

    const data = {
      login: fullNumber,
      password,
    };
    if (phone && password) {
      await this._loginPostOperation.run(() =>
        IdentityService.login(AppConfig.apiVersion, data),
      );

      if (this._loginPostOperation.data.required2Fa) {
        this.onSuccess(fullNumber);
      }
    }
  };
}
