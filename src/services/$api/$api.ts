import {AppConfig} from 'config/appConfig';
import axios, {AxiosInstance} from 'axios';
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IToken} from 'store/core/db/TokenStore';
export const TIME_OUT = 30000;

class Api {
  private readonly api: AxiosInstance;

  constructor() {
    makeAutoObservable(this);
    this.api = axios.create({
      baseURL: AppConfig.baseUrl,
      timeout: TIME_OUT,
    });

    this.api.interceptors.request.use(
      async (config: any) => {
        const tokenFromAsyncStore =
          (await AsyncStorage.getItem(IToken.accessToken)) || '';

        this.setAccessToken(tokenFromAsyncStore);
        return config;
      },
      error => Promise.reject(error),
    );
  }

  private setAccessToken = (accessToken: string) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };
}

const $api = new Api();

export default $api;
