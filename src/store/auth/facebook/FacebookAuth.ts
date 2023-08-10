import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
  Settings,
} from 'react-native-fbsdk-next';
import {IdentityService} from 'services/api';
import {RootStore} from 'store/rootStore';
import {isIOS} from 'utils/platforms';

export default class FacebookAuth {
  private readonly root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
    this.configure();
  }

  private configure = () => {
    Settings.initializeSDK();
    Settings.setAppID(AppConfig.auth.facebook.app_id as string);
  };

  private externerLogin = async (token: string) => {
    try {
      const res = await IdentityService.externalLogin(AppConfig.apiVersion, {
        idToken: token,
      });
      this.root._token._set(res.accessToken as string);
    } catch (err: any) {}
  };

  getFacebookIDToken = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw new Error('User cancelled the login process');
    }

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw new Error('Something went wrong obtaining access token');
    }

    const idToken = data?.idToken ?? '';

    console.log({idToken});

    return idToken;
  };

  login = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          if (isIOS) {
            AuthenticationToken.getAuthenticationTokenIOS()
              .then(res => {
                this.externerLogin(res?.authenticationToken || '');
              })
              .catch(err => console.log(err));
          } else {
            AccessToken.getCurrentAccessToken().then((data: any) => {
              const token = data.accessToken.toString();
              this.externerLogin(token);
            });
          }
        }
      },
      err => {
        console.log('Erro no login ', console.error(err));
      },
    );
  };

  logout = () => {
    LoginManager.logOut();
  };
}
