import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import {CompanyItemParams} from 'navigation/AppNavigator.types';
import {ACTIVITY_ROUTES} from 'navigation/routes';

import ActivitiyScreen from 'screens/Activities';
import CompanyItemScreen from 'screens/CompanyItem/CompanyItemScreen';
import CompanyListScreen from 'screens/CompanyList/CompanyListScreen';
import NewVotingScreen from 'screens/NewTasks/NewTaskScreen';
import TasksScreen from 'screens/TasksScreen';
import VotingsScreen from 'screens/VotingsScreen';
import VotingTasksScreen from 'screens/VotingTasks/VotingTasksScreen';
import {ActivityBase} from 'services/api';

export type ActivityStackParamList = {
  [ACTIVITY_ROUTES.home]: undefined;
  [ACTIVITY_ROUTES.tasks]: undefined;
  [ACTIVITY_ROUTES.votings]: undefined;
  [ACTIVITY_ROUTES.company_item]: CompanyItemParams;
  [ACTIVITY_ROUTES.company_list]: undefined;
  [ACTIVITY_ROUTES.tasks_recomended]: CompanyItemParams;
  [ACTIVITY_ROUTES.voting_tasks]: ActivityBase;
};

export type ActivityRouteType<T extends keyof ActivityStackParamList> =
  RouteProp<ActivityStackParamList, T>;

export type NavigationTypeActivity<T extends keyof ActivityStackParamList> =
  StackNavigationProp<ActivityStackParamList, T>;

const Stack = createStackNavigator<ActivityStackParamList>();

const ActivitiyStack = () => (
  <Stack.Navigator
    initialRouteName={ACTIVITY_ROUTES.home}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ACTIVITY_ROUTES.home} component={ActivitiyScreen} />
    <Stack.Screen name={ACTIVITY_ROUTES.tasks} component={TasksScreen} />
    <Stack.Screen name={ACTIVITY_ROUTES.votings} component={VotingsScreen} />
    <Stack.Screen
      name={ACTIVITY_ROUTES.tasks_recomended}
      component={NewVotingScreen}
    />
    <Stack.Screen
      name={ACTIVITY_ROUTES.company_item}
      component={CompanyItemScreen}
      options={{...TransitionPresets.ModalSlideFromBottomIOS}}
    />
    <Stack.Screen
      name={ACTIVITY_ROUTES.company_list}
      component={CompanyListScreen}
      options={{...TransitionPresets.ModalFadeTransition}}
    />
    <Stack.Screen
      name={ACTIVITY_ROUTES.voting_tasks}
      component={VotingTasksScreen}
      options={{...TransitionPresets.SlideFromRightIOS}}
    />
  </Stack.Navigator>
);

export default ActivitiyStack;
