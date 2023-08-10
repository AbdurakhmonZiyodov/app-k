import RN from 'components/RN';
import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {styles} from './MainScreen.style';
import IProvider from 'components/IProvider';
import AnimationView from './Components/AnimationView/AnimationView';
import Text from 'components/UI/components/Text';
import RewardWidgets from 'components/RewardWidgets';
import useRootStore from 'hooks/useRootStore';
import {ActivityType} from 'services/api';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NavigationTypeActivity} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import SvgImages from 'assets/svgImages';
import SIZES from 'constants/sizes';

const MainScreen = () => {
  const isFocused = useIsFocused();
  const {getAllActivity, activityList} = useRootStore().service.activity;

  useEffect(() => {
    isFocused && getAllActivity();
  }, [getAllActivity, isFocused]);

  const {navigate} =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.company_item>>();

  const LOGO_SIZE = Math.max(SIZES.width * 0.3, 150);
  const LOGO_SIZE2 = LOGO_SIZE * 0.3;

  const headerView = () => (
    <RN.View style={styles.headerView}>
      <SvgImages.appLogo
        style={styles.appLogo}
        width={LOGO_SIZE}
        height={LOGO_SIZE2}
      />
    </RN.View>
  );

  const ellipseaView = () => <RN.View style={styles.ellipseView} />;

  const renderMainRewards = () => (
    <RN.View style={styles.rewardCards}>
      {activityList.map((item, index) => (
        <RewardWidgets
          key={index}
          title={item.summary}
          timeToOver={item.endDateTime}
          peopleAprove
          tokens={item.reward as any}
          widgetsType={item.type as ActivityType}
          cardStyle={styles.rewardCard}
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
        />
      ))}
    </RN.View>
  );

  return (
    <IProvider>
      <RN.View style={styles.container}>
        {headerView()}
        <RN.ScrollView style={styles.scroolView} nestedScrollEnabled={true}>
          <RN.View style={styles.animationcard}>
            <Text
              title="Choose your way"
              type="boldLargeTitle"
              style={styles.title}
            />
            <AnimationView />
          </RN.View>
          {renderMainRewards?.()}
        </RN.ScrollView>
        {ellipseaView?.()}
      </RN.View>
    </IProvider>
  );
};

export default observer(MainScreen);
