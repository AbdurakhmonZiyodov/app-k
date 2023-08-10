import {AppConfig} from 'config/appConfig';
import {makeAutoObservable} from 'mobx';
import $api from 'services/$api/$api';
import {ActivityService} from 'services/api';
import {RootStore} from 'store/rootStore';
import FileUpload from 'utils/FileUpload';
import IShare from 'utils/IShare';
import {Operation} from 'utils/Operation';

export default class NewTasksStore {
  private readonly root: RootStore;
  file: FileUpload = new FileUpload();
  private postUploadFileOperation = new Operation<{id: string}>({id: ''});
  postSubmissionOperation = new Operation({});
  share: IShare = new IShare();
  textInput: string = '';

  constructor(root: RootStore) {
    this.root = root;

    makeAutoObservable(this);
  }

  onChangeTextInput = (value: string) => (this.textInput = value);
  private clearTextInput = () => (this.textInput = '');

  private postSubmission = async (id: string, attachmentId: string) => {
    await this.postSubmissionOperation.run(() =>
      ActivityService.postApiVActivityTaskSubmission(id, AppConfig.apiVersion, {
        text: this.textInput,
        attachmentId,
      }),
    );
  };

  private postUploadFile = async (taskId: string) => {
    const formData = new FormData();

    formData.append('FileName', this.file.response?.name || 'File');
    formData.append('File', {
      uri: this.file.response?.uri,
      name: this.file.response?.name,
      type: this.file.response?.type,
    });

    await this.postUploadFileOperation.run(() =>
      $api
        .postApiVActivityTaskAttachment(
          taskId,
          formData,
          this.root._token._get(),
        )
        .then(res => res.data),
    );

    if (this.postUploadFileOperation.isSuccess) {
      const attachmentId = this.postUploadFileOperation.data.id;
      await this.postSubmission(taskId, attachmentId);

      if (this.postSubmissionOperation.isSuccess) {
        this.clearTextInput();
      }
    }
  };

  onSend = async (taskId: string) => {
    await this.postUploadFile(taskId);
  };
}
