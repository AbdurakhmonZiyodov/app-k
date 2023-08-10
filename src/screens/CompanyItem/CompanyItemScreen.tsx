import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import Header from 'components/Header';
import IProvider from 'components/IProvider';
import RewardWidgets from 'components/RewardWidgets';
import RN from 'components/RN';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {ScrollViewPadding} from 'constants/constants';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';

import {
  ActivityRouteType,
  NavigationTypeActivity,
} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useEffect} from 'react';

import {ActivityType, Reward} from 'services/api';
import {ActivityFilter} from 'store/services/activity/ActivityStore';
import {ButtonType} from 'types';
import {styles} from './CompanyItemScreen.styles';
import CompanyItemHeader from './components/CompanyItemHeader';

const CompanyItemScreen = () => {
  const route = useRoute<ActivityRouteType<ACTIVITY_ROUTES.company_item>>();
  const {navigate} =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.company_item>>();

  const {findOneCompany} = useRootStore().service.company;
  const {activityList, getAllActivity, activityFilter, activityFilterType} =
    useRootStore().service.activity;

  const companyId = route.params.id;
  const companyData = findOneCompany(companyId);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getAllActivity([companyId]);
      activityFilter(ActivityFilter.All);
    }
  }, [activityFilter, companyId, getAllActivity, isFocused]);

  const renderRightHeader = () => (
    <RN.TouchableOpacity
      onPress={() => {
        navigate(ACTIVITY_ROUTES.company_list);
      }}>
      <Text title="All company" type="regularCaption1" style={styles.text} />
    </RN.TouchableOpacity>
  );

  const recommendedView = () => (
    <RN.View>
      {activityList.map((item, index) => (
        <RewardWidgets
          key={index}
          title={item.summary}
          timeToOver={item.endDateTime}
          peopleAprove
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
          tokens={item.reward as Reward}
          widgetsType={item.type}
        />
      ))}
    </RN.View>
  );
  return (
    <IProvider backgroundColor={companyData.backgroundColor}>
      <RN.View style={styles.container}>
        <RN.View style={styles.headerTopContainer}>
          <Header leftIcon="ArrowLeft" renderRightHeader={renderRightHeader} />
        </RN.View>
        <RN.ScrollView
          bounces={false}
          style={styles.container}
          nestedScrollEnabled={true}
          contentContainerStyle={[styles.scrollView, ScrollViewPadding]}>
          <CompanyItemHeader data={companyData} />

          <RN.View style={styles.mainContainer}>
            <RN.View style={styles.descriptionContainer}>
              <Text
                title={'ABOUT'}
                type={'regularFootnote2'}
                style={styles.text}
              />
              <Text
                title={companyData.description}
                type={'regularFootnote2'}
                style={styles.text}
              />
            </RN.View>

            <RN.View style={styles.filterButtonContainer}>
              <RN.ScrollView horizontal>
                <RN.TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => {
                    activityFilter(ActivityFilter.All);
                  }}>
                  <Text
                    title={'All'}
                    type={'regularCaption1'}
                    style={[
                      styles.text,
                      activityFilterType === ActivityFilter.All && {
                        color: COLORS.green,
                      },
                    ]}
                  />
                </RN.TouchableOpacity>
                <RN.TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => {
                    activityFilter(ActivityFilter.Votings);
                  }}>
                  <Text
                    title={'Votings'}
                    type={'regularCaption1'}
                    style={[
                      styles.text,
                      activityFilterType === ActivityFilter.Votings && {
                        color: COLORS.green,
                      },
                    ]}
                  />
                </RN.TouchableOpacity>
                <RN.TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => {
                    activityFilter(ActivityFilter.Tasks);
                  }}>
                  <Text
                    title={'Tasks'}
                    type={'regularCaption1'}
                    style={[
                      styles.text,
                      activityFilterType === ActivityFilter.Tasks && {
                        color: COLORS.green,
                      },
                    ]}
                  />
                </RN.TouchableOpacity>
                <RN.TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => {
                    activityFilter(ActivityFilter.News);
                  }}>
                  <Text
                    title={'News'}
                    type={'regularCaption1'}
                    style={[
                      styles.text,
                      activityFilterType === ActivityFilter.News && {
                        color: COLORS.green,
                      },
                    ]}
                  />
                </RN.TouchableOpacity>
              </RN.ScrollView>
            </RN.View>

            <RN.View style={styles.filteredItemsContainer}>
              {recommendedView()}
            </RN.View>

            <PrimaryButtonLarge
              textPosition="center"
              title="More"
              style={styles.moreButton}
              titleStyle={styles.moreButtonText}
              type={ButtonType.FILLED}
            />
          </RN.View>
        </RN.ScrollView>
      </RN.View>
    </IProvider>
  );
};

export default observer(CompanyItemScreen);
