import {useIsFocused, useNavigation} from '@react-navigation/native';
import CompaniesCard from 'components/CompaniesCard';
import RN from 'components/RN';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationTypeActivity} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useCallback, useEffect} from 'react';
import {styles} from './CompanysCard.style';
const CompanysCard = () => {
  const companyStore = useRootStore().service.company;
  const navigation =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.company_item>>();
  const isFocused = useIsFocused();

  const navigateToNextScreen = useCallback(
    (id: string) => {
      navigation.navigate(ACTIVITY_ROUTES.company_item, {id});
    },
    [navigation],
  );

  useEffect(() => {
    isFocused && companyStore.getAllCompany();
  }, [companyStore, isFocused]);

  return (
    <RN.View style={styles.ScrollView}>
      <RN.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}>
        {companyStore.companyList.map(company => (
          <CompaniesCard
            key={company.id}
            name={company.name}
            logo={{uri: company.logo}}
            logoHeight={85}
            logoWidth={98}
            onPress={() => navigateToNextScreen(company.id)}
            color={company.backgroundColor}
            containerStyle={styles.cardContainer}
          />
        ))}
      </RN.ScrollView>
    </RN.View>
  );
};
export default observer(CompanysCard);
