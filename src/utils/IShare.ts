import {ShareOpenResult, ShareOptions} from 'react-native-share/src/types';
import {makeAutoObservable} from 'mobx';
import RNSHare from 'react-native-share';

export default class IShare {
  response?: ShareOpenResult;
  constructor() {
    makeAutoObservable(this);
  }

  onPress = async (option?: ShareOptions) => {
    try {
      const response = RNSHare.open(option || {message: 'Not message'});
      return response.then(res => {
        this.response = res;
      });
    } catch (err) {
      return err;
    }
  };
}
