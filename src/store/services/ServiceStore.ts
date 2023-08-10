import {makeAutoObservable} from 'mobx';
import {RootStore} from 'store/rootStore';
import AccountStore from './account/AccountStore';
import ActivityStore from './activity/ActivityStore';
import CompanyStore from './company/CompanyStore';
import NewTasksStore from './new-tasks/NewTasksStore';
import VotingTasksStore from './voting-tasks/VotingTasksStore';

export default class ServiceStore {
  private readonly root: RootStore;
  activity: ActivityStore;
  company: CompanyStore;
  newTasks: NewTasksStore;
  account: AccountStore;
  votingTasks: VotingTasksStore;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.activity = new ActivityStore(root);
    this.company = new CompanyStore(root);
    this.newTasks = new NewTasksStore(root);
    this.account = new AccountStore(root);
    this.votingTasks = new VotingTasksStore(root);
  }
}
