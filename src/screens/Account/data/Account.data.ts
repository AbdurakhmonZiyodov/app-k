import {Icons} from 'assets/icons';
import {ACCOUNT_ROUTES} from 'navigation/routes';

export const accountList = [
  {
    title: 'Personal info',
    Icon: Icons.Profile,
    Path: ACCOUNT_ROUTES.personal_info,
  },
  {
    title: 'Password',
    Icon: Icons.Password,
    Path: ACCOUNT_ROUTES.change_password,
  },
  {
    title: 'Notifications',
    Icon: Icons.Notification,
    Path: ACCOUNT_ROUTES.notifaction,
  },
  {
    title: 'Language',
    Icon: Icons.Lang,
    Path: ACCOUNT_ROUTES.language,
  },
  {
    title: 'Billing',
    Icon: Icons.Billing,
    Path: ACCOUNT_ROUTES.biling,
  },
  {
    title: 'FAQ & Support',
    Icon: Icons.Settings,
    Path: ACCOUNT_ROUTES.faq_support,
  },
];
