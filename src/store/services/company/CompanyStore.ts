import {makeAutoObservable} from 'mobx';
import {CompanyBase, CompanyBasePage, CompanyService} from 'services/api';
import {RootStore} from 'store/rootStore';
import IShare from 'utils/IShare';

interface SearchInput {
  value: string;
  items: CompanyBase[];
}

export default class CompanyStore {
  private readonly root: RootStore;
  searchInput: SearchInput = {
    value: '',
    items: [],
  };
  public share: IShare = new IShare();
  private companyBase: CompanyBasePage = {
    items: [],
    pageNumber: 0,
    pageSize: 0,
  };

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  private updateBaseCompany = (res: CompanyBasePage) => {
    this.companyBase = res;
    this.searchInput.items = res.items || [];
  };

  get companyList(): CompanyBase[] {
    return this.companyBase.items || [];
  }

  getAllCompany = async () => {
    try {
      const res = await CompanyService.getCompanies();

      this.updateBaseCompany(res);
    } catch (err) {
      console.log('error:', err);
    }
  };

  onChangeSeachInput = (val: string) => {
    this.searchInput.value = val;
    this.searchCompany(val);
  };

  searchCompany = (value: string) => {
    const searchedItem = value.toUpperCase();

    this.companyBase.items = this.searchInput.items.filter(i => {
      const itemValue = i.name.toUpperCase();
      return itemValue.includes(searchedItem);
    });
  };

  sortAllCompany = (sort: 'AZ' | 'ZA' | 'NEW' | 'OLD') => {
    switch (sort) {
      case 'AZ':
        this.sortAllCompanyAZ();
        break;
      case 'ZA':
        this.sortAllCompanyAZReverse();
        break;
      case 'NEW':
        this.sortNewstDate();
        break;
      case 'OLD':
        this.sortOldesttDate();
        break;
      default:
        break;
    }
  };

  private sortAllCompanyAZ = () => {
    this.companyBase.items = this.companyBase.items?.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  private sortAllCompanyAZReverse = () => {
    this.companyBase.items = this.companyBase.items?.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  };

  private sortNewstDate = () => {
    this.companyBase.items = this.companyBase.items?.sort(
      (a, b) =>
        new Date(a.createdAt || '').getTime() -
        new Date(b.createdAt || '').getTime(),
    );
  };

  private sortOldesttDate = () => {
    this.companyBase.items = this.companyBase.items?.sort(
      (a, b) =>
        new Date(b.createdAt || '').getTime() -
        new Date(a.createdAt || '').getTime(),
    );
  };

  getOneCompanyData = (id: string): CompanyBase => {
    const item = this.companyList.find(i => i.id === id) || {};
    return item as CompanyBase;
  };
  findOneCompany = (id: string) =>
    (this.companyList.find(i => i.id === id) || {}) as CompanyBase;
}
