import {useIsFocused, useRoute} from '@react-navigation/native';
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {ActivityRouteType} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useEffect} from 'react';
import Display from './components/Display';
import Header from './components/Header';
import VotingList from './components/VotingList';
import {styles} from './VotingTasksScreen.styles';

const VotingTasksScreen = () => {
  const {findOneCompany} = useRootStore().service.company;
  const {getAllVotings} = useRootStore().service.activity;
  const {votingList} = useRootStore().service.votingTasks;
  const route = useRoute<ActivityRouteType<ACTIVITY_ROUTES.voting_tasks>>();
  const activityData = route.params || {};
  const companyData = findOneCompany(activityData.companyId);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getAllVotings();
  }, [getAllVotings, isFocused]);

  return (
    <IProvider backgroundColor={companyData.backgroundColor}>
      <RN.View style={styles.container}>
        <Header title="Voting" backgroundColor={companyData.backgroundColor} />
        <RN.ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <Display companyData={companyData} activityData={activityData} />
          <VotingList data={votingList} />
        </RN.ScrollView>
      </RN.View>
    </IProvider>
  );
};
export default observer(VotingTasksScreen);
