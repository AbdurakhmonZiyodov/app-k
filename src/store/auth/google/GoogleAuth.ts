import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
import {AppConfig} from 'config/appConfig';
import {makeAutoObservable, runInAction} from 'mobx';
import {IdentityService} from 'services/api';
import {RootStore} from 'store/rootStore';

export default class GoogleAuth {
  private readonly root: RootStore;
  userInfo?: User;
  error?: string;
  isAuth?: boolean = false;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
    this.configure();
  }

  private configure = () => {
    GoogleSignin.configure({
      webClientId: AppConfig.auth.google.webClientId,
      offlineAccess: false,
    });
  };

  private externerLogin = async (token: string) => {
    try {
      const res = await IdentityService.externalLogin(AppConfig.apiVersion, {
        idToken: token,
      });

      this.root._token._set(res.accessToken as string);
    } catch (err: any) {}
  };

  login = async () => {
    this.isAuth = false;
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      runInAction(() => {
        this.updateInfo(res);
      });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED)
        this.error = 'user cancelled the login flow';
      else if (error.code === statusCodes.IN_PROGRESS)
        this.error = 'operation (e.g. sign in) is in progress already';
      else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
        this.error = 'play services not available or outdated';
      else if (error.code === statusCodes.SIGN_IN_REQUIRED)
        this.error = 'user has not signed in yet';
      else this.error = 'some other error happened';
    }
  };

  private updateInfo = (user: User, callback?: () => void) => {
    this.isAuth = true;
    this.userInfo = user;
    this.externerLogin(user.idToken || '');
    callback?.();
  };

  logout = async () => {
    try {
      await GoogleSignin.signOut();
      this.clear();
      runInAction(() => {
        this.userInfo = undefined;
        this.isAuth = false;
      });
    } catch (error: any) {
      this.error = error.message;
    }
  };

  clear = () => {
    this.userInfo = undefined;
    this.error = undefined;
    this.root._token.clear();
  };
}
