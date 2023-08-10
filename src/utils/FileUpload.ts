import {makeAutoObservable} from 'mobx';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

export default class FileUpload {
  response?: DocumentPickerResponse;

  constructor() {
    makeAutoObservable(this);
  }

  private updateResponse = (response: DocumentPickerResponse) => {
    this.response = response;
  };

  onPress = async () => {
    try {
      const res = await DocumentPicker.pickSingle();
      this.updateResponse(res);
      return res;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
}
