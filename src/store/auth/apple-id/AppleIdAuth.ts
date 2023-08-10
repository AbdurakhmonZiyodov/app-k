import appleAuth from '@invertase/react-native-apple-authentication';
import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
import {IdentityService} from 'services/api';
import {RootStore} from 'store/rootStore';

export default class AppleIdAuth {
  private readonly root: RootStore;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  private externerLogin = async (token: string) => {
    try {
      const res = await IdentityService.externalLogin(AppConfig.apiVersion, {
        idToken: token,
      });

      this.root._token._set(res.accessToken as string);
    } catch (err: any) {}
  };

  login = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === appleAuth.State.AUTHORIZED) {
        this.externerLogin(appleAuthRequestResponse.identityToken as string);
      }

      console.log(JSON.stringify(appleAuthRequestResponse, null, 2));
    } catch (err) {
      console.log('last error', JSON.stringify(err, null, 2));
    }
  };

  logout = async () => {
    await IdentityService.logout();
  };
}
