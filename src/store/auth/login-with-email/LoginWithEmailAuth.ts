import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
import NavigationService from 'navigation/NavigationService';
import {APP_ROUTES} from 'navigation/routes';
import {IdentityService} from 'services/api';
import {RootStore} from 'store/rootStore';
import {Operation} from 'utils/Operation';

type Form = {
  email: string;
  password: string;
};

const initialForm: Form = {
  email: '',
  password: '',
};

export default class LoginWithEmailAuth {
  private readonly root: RootStore;
  form: Form = initialForm;
  _operation = new Operation<{accessToken: string}>({accessToken: ''});

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  changeValue = (value: string, key: keyof Form) => {
    this.form[key] = value;
  };

  clearValues = () => {
    this.form = initialForm;
  };

  private onSuccess = () => {
    NavigationService.navigate(APP_ROUTES.bottom_navigation);
    this.clearValues();
  };

  onAsyncPress = async () => {
    const {email: login, password} = this.form;
    const data = {login, password};

    await this._operation.run(() =>
      IdentityService.login(AppConfig.apiVersion as string, data),
    );

    if (this._operation.isSuccess) {
      const token = this._operation.data.accessToken;
      await this.root._token._set(token);

      this.onSuccess();
    }
  };
}
