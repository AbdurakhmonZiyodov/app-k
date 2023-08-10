import {makeAutoObservable, toJS} from 'mobx';
import {RootStore} from 'store/rootStore';
import {Operation} from 'utils/Operation';

type Form = {
  phone: string;
};

const initialForm: Form = {
  phone: '',
};

export default class ForgotPasswordWithPhoneAuth {
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

  onAsyncPress = () => {
    console.log(toJS(this.form));
  };
}
