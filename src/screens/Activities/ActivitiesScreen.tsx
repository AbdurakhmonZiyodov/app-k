import CircleComponent from 'components/CircleComponent';
import Header from 'components/Header';
import RewardWidgets from 'components/RewardWidgets';
import RN from 'components/RN';
import ScreenTitle from 'components/ScreenTitle';
import {observer} from 'mobx-react-lite';

import {useIsFocused, useNavigation} from '@react-navigation/native';
import IProvider from 'components/IProvider';
import useRootStore from 'hooks/useRootStore';
import {NavigationTypeActivity} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useEffect} from 'react';
import CompanyCard from 'screens/CompanyList/components/CompanyCard';
import {styles} from './ActivitiesScreen.style';
import ActivityTasksList from './components/ActivityTasksList';
import {ActivityType} from 'services/api';
import {ScrollViewPadding} from 'constants/constants';

const ActivitiesScreen = () => {
  const isFocused = useIsFocused();
  const {getAllActivity, activityList} = useRootStore().service.activity;
  const {navigate} =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.company_item>>();

  useEffect(() => {
    isFocused && getAllActivity();
  }, [getAllActivity, isFocused]);

  const RecommendedView = () => (
    <RN.View style={styles.widgetsView}>
      {activityList.map((item, index) => (
        <RewardWidgets
          key={index}
          onPress={() => {
            if (item.type === ActivityType.VOTING) {
              navigate(ACTIVITY_ROUTES.voting_tasks, item);
            }

            if (item.type === ActivityType.TASK) {
              navigate(ACTIVITY_ROUTES.tasks_recomended, {
                id: item.id,
              });
            }
          }}
          title={item.summary}
          timeToOver={item.endDateTime}
          peopleAprove
          tokens={item.reward as any}
          widgetsType={item.type as ActivityType}
        />
      ))}
    </RN.View>
  );

  const MainScrollContainer = () => (
    <RN.ScrollView
      style={styles.container}
      nestedScrollEnabled={true}
      contentContainerStyle={ScrollViewPadding}
      showsVerticalScrollIndicator={false}>
      <ActivityTasksList />
      <ScreenTitle
        title="Companies"
        rightBtnTitle="View All"
        onRightBtnPress={() => navigate(ACTIVITY_ROUTES.company_list)}
      />
      <CompanyCard />
      <ScreenTitle title="Recommended" />
      {RecommendedView?.()}
    </RN.ScrollView>
  );

  return (
    <IProvider>
      <RN.View style={styles.screen}>
        <Header
          leftIcon="ArrowLeft"
          tokenBalance="$ 1971.2"
          title="Activities"
          leftIconStyle={styles.leftIconStyle}
        />
        <CircleComponent />
        {MainScrollContainer()}
      </RN.View>
    </IProvider>
  );
};

export default observer(ActivitiesScreen);
