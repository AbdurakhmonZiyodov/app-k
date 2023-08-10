import {APP_ROUTES} from 'navigation/routes';
import DaoPasswordScreen from 'screens/DaoPassword';
import MainScreen from 'screens/Main/MainScreen';
import AccountStack from './stacks/Account/AccountStack';
import ActivitiyStack from './stacks/Activitiy/ActivitiyStack';
import MarketplaceStack from './stacks/Marketplace/MarketplaceStack';

export const bottomTabBarOptions = {
  options: {
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    headerShown: false,
  },
  list: [
    {
      index: 0,
      buttonLabel: 'Main',
      component: MainScreen,
      tabName: APP_ROUTES.main,
    },
    {
      index: 1,
      tabName: APP_ROUTES.dao_password,
      component: DaoPasswordScreen,
      buttonLabel: 'DAO Passport',
    },
    {
      index: 2,
      tabName: APP_ROUTES.activities,
      component: ActivitiyStack,
      buttonLabel: '',
    },
    {
      index: 3,
      tabName: APP_ROUTES.marketplace,
      component: MarketplaceStack,
      buttonLabel: 'Marketplace',
    },
    {
      index: 4,
      tabName: APP_ROUTES.account,
      component: AccountStack,
      buttonLabel: 'Account',
    },
  ],
};
