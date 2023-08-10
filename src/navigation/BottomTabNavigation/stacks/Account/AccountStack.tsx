import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import AccountScreen from 'screens/Account';
import AccountLanguage from 'screens/Account/AccountLanguage';
import AddPaymentScreen from 'screens/Account/AddPaymentScreen';
import BillingScreen from 'screens/Account/BilingScreen';
import BillingDone from 'screens/Account/BillingDoneScreen';
import BillingEdit from 'screens/Account/BillingEditScreen';
import ChangeScreen from 'screens/Account/ChangeScreen';
import PaymentAdded from 'screens/Account/PaymentAddedScreen';
import PersonalInfoScreen from 'screens/Account/PersonalInfoScreen';

export type AccountStackParamList = {
  [ACCOUNT_ROUTES.home]: undefined;
  [ACCOUNT_ROUTES.change_password]: undefined;
  [ACCOUNT_ROUTES.biling]: undefined;
  [ACCOUNT_ROUTES.payment_system_added]: undefined;
  [ACCOUNT_ROUTES.language]: undefined;
  [ACCOUNT_ROUTES.personal_info]: undefined;
  [ACCOUNT_ROUTES.add_payment_system]: undefined;
  [ACCOUNT_ROUTES.billing_done]: undefined;
  [ACCOUNT_ROUTES.billing_edit]: undefined;
  [ACCOUNT_ROUTES.notifaction]: undefined;
  [ACCOUNT_ROUTES.faq_support]: undefined;
};

export type AccountRouteType<T extends keyof AccountStackParamList> = RouteProp<
  AccountStackParamList,
  T
>;

export type NavigationTypeAccount<T extends keyof AccountStackParamList> =
  StackNavigationProp<AccountStackParamList, T>;

const Stack = createStackNavigator<AccountStackParamList>();

const AccountStack = () => (
  <Stack.Navigator
    initialRouteName={ACCOUNT_ROUTES.home}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ACCOUNT_ROUTES.home} component={AccountScreen} />
    <Stack.Screen
      name={ACCOUNT_ROUTES.change_password}
      component={ChangeScreen}
    />
    <Stack.Screen
      name={ACCOUNT_ROUTES.personal_info}
      component={PersonalInfoScreen}
    />
    <Stack.Screen name={ACCOUNT_ROUTES.biling} component={BillingScreen} />
    <Stack.Screen
      name={ACCOUNT_ROUTES.add_payment_system}
      component={AddPaymentScreen}
    />
    <Stack.Screen name={ACCOUNT_ROUTES.language} component={AccountLanguage} />
    <Stack.Screen
      name={ACCOUNT_ROUTES.payment_system_added}
      component={PaymentAdded}
    />
    <Stack.Screen name={ACCOUNT_ROUTES.billing_edit} component={BillingEdit} />
    <Stack.Screen name={ACCOUNT_ROUTES.billing_done} component={BillingDone} />
  </Stack.Navigator>
);

export default AccountStack;
