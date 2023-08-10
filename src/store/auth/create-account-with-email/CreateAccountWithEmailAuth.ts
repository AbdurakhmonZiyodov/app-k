import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
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

export default class CreateAccountWithEmailAuth {
  private readonly root: RootStore;
  form: Form = initialForm;
  _operation = new Operation(undefined);

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

  onAsyncPress = async () => {
    await this._operation.run(() =>
      IdentityService.registerEmail(AppConfig.apiVersion, this.form),
    );

    if (this._operation.isSuccess) {
      this.clearValues();
    }
  };
}
