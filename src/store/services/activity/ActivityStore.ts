import {makeAutoObservable} from 'mobx';
import {ActivityBase, ActivityService, ActivityType} from 'services/api';
import {RootStore} from 'store/rootStore';
import {Operation} from 'utils/Operation';

type ActivityOperationType = {
  items: ActivityBase[];
};

export enum ActivityFilter {
  All = '',
  Votings = 'Voting',
  Tasks = 'Task',
  News = 'News',
}

export default class ActivityStore {
  private readonly root: RootStore;
  tasksOperation = new Operation<ActivityOperationType>({items: []});
  votingsOperation = new Operation<ActivityOperationType>({items: []});
  activityOperation = new Operation<ActivityOperationType>({items: []});
  activityFilterType: ActivityFilter = ActivityFilter.All;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  getAllActivity = async (companyIdList?: string[]) => {
    await this.activityOperation.run(() =>
      ActivityService.getActivities([], companyIdList),
    );
  };

  getAllTasks = async (companyIdList?: string[]) => {
    await this.tasksOperation.run(() =>
      ActivityService.getActivities([ActivityType.TASK], companyIdList),
    );
  };

  getAllVotings = async (companyIdList?: string[]) => {
    await this.votingsOperation.run(() =>
      ActivityService.getActivities([ActivityType.VOTING], companyIdList),
    );
  };

  get activityList() {
    return this.activityOperation.data.items || [];
  }

  get taskList() {
    return this.tasksOperation.data.items || [];
  }

  get votingList() {
    return this.votingsOperation.data.items || [];
  }

  findOneActivity = (id: string) =>
    (this.taskList.find(activity => activity.id === id) || {}) as ActivityBase;

  findOneTask = (id: string) =>
    (this.taskList.find(activity => activity.id === id) || {}) as ActivityBase;

  findOneVoting = (id: string) =>
    (this.taskList.find(activity => activity.id === id) || {}) as ActivityBase;

  activityFilter = (type: ActivityFilter = ActivityFilter.All) => {
    this.activityFilterType = type;
    this.activityOperation._setData({
      items: this.activityOperation.copiedData.items.filter(i =>
        i.type.includes(type as unknown as ActivityType),
      ),
    });
  };
}
