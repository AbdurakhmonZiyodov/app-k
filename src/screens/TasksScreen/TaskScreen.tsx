import {useIsFocused, useNavigation} from '@react-navigation/native';
import CircleComponent from 'components/CircleComponent';
import Header from 'components/Header';
import IProvider from 'components/IProvider';
import RewardWidgets from 'components/RewardWidgets';
import RN from 'components/RN';
import ScreenTitle from 'components/ScreenTitle';
import {ScrollViewPadding} from 'constants/constants';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationTypeActivity} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useEffect} from 'react';
import CompanyCard from 'screens/CompanyList/components/CompanyCard';
import {Reward} from 'services/api';
import {styles} from './TaskScreen.style';

const TasksScreen = () => {
  const {taskList, getAllTasks} = useRootStore().service.activity;
  const {findOneCompany} = useRootStore().service.company;
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getAllTasks();
  }, [getAllTasks, isFocused]);

  const {navigate} =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.tasks>>();

  const RecommendedView = () => (
    <RN.View>
      {taskList.map((item, index) => (
        <RewardWidgets
          key={index}
          title={item.summary}
          logo={{uri: findOneCompany(item.companyId).logo}}
          timeToOver={item.endDateTime}
          peopleAprove
          onPress={() => {
            navigate(ACTIVITY_ROUTES.tasks_recomended, {
              id: item.id,
            });
          }}
          tokens={item.reward as Reward}
          widgetsType={item.type}
        />
      ))}
    </RN.View>
  );

  const MainScrollContainer = () => (
    <RN.ScrollView
      contentContainerStyle={{...ScrollViewPadding}}
      style={styles.container}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <ScreenTitle
        title="Companies"
        rightBtnTitle="View All"
        onRightBtnPress={() => {
          navigate(ACTIVITY_ROUTES.company_list);
        }}
      />
      <CompanyCard />
      <ScreenTitle title="Recommended" />
      <RecommendedView />
    </RN.ScrollView>
  );

  return (
    <IProvider>
      <RN.View style={styles.screen}>
        <Header
          leftIcon="ArrowLeft"
          tokenBalance="$ 1971.2"
          title="Tasks"
          leftIconStyle={styles.leftIconStyle}
        />
        <CircleComponent />
        {MainScrollContainer()}
      </RN.View>
    </IProvider>
  );
};

export default observer(TasksScreen);
