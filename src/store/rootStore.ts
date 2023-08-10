import {makeAutoObservable} from 'mobx';
import {createContext} from 'react';

// stores
import AuthStore from './auth';
import TokenStore from './core/db/TokenStore';
import ServiceStore from './services/ServiceStore';

export class RootStore {
  auth: AuthStore;
  _token: TokenStore;
  service: ServiceStore;

  constructor() {
    makeAutoObservable(this);
    this.auth = new AuthStore(this);
    this.service = new ServiceStore(this);
    this._token = new TokenStore(this);
  }
}

const rootStore = new RootStore();

export default createContext(rootStore);
