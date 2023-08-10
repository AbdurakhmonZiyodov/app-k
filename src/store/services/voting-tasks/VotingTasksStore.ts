import Images from 'assets/images';
import {makeAutoObservable} from 'mobx';
import {VotingListItem} from 'screens/VotingTasks/components/VotingList/VotingList';
import {RootStore} from 'store/rootStore';

const data = [
  {
    id: 1,
    source: Images.Moc.bigMac,
    name: 'Big Mac',
    percent: 54,
    isPressed: false,
  },
  {
    id: 2,
    source: Images.Moc.bigMac,
    name: 'Big Tasty',
    percent: 32,
    isPressed: false,
  },
  {
    id: 3,
    source: Images.Moc.bigMac,
    name: 'Double Cheeseburger',
    percent: 7,
    isPressed: false,
  },
  {
    id: 4,
    source: Images.Moc.bigMac,
    name: 'Hamburger',
    percent: 7,
    isPressed: false,
  },
];

export enum IVotingStatus {
  status_0 = 0,
  status_1 = 1,
  status_2 = 2,
}

export default class VotingTasksStore {
  private readonly root: RootStore;
  private data: VotingListItem[] = data;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  public get votingList() {
    return this.data;
  }

  public onPressVoting = (item: VotingListItem) => {
    this.data = this.data.map(i =>
      i.id === item.id ? {...i, isPressed: true} : {...i, isPressed: false},
    );
  };

  public clean = () => {
    this.data = data;
  };
}
