import {Icons} from 'assets/icons';
import React from 'react';
import CircleComponent from 'components/CircleComponent';
import Header from 'components/Header';
import RN from 'components/RN';
import Field from 'components/UI/components/Field';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {styles} from './CompanyList.style';
import CompaniesCard from 'components/CompaniesCard';
import {useNavigation} from '@react-navigation/native';
import {NavigationTypeActivity} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useCallback} from 'react';
import CompanySort from './components/CompanySort';
import IProvider from 'components/IProvider';
import SIZES from 'constants/sizes';
import {ScrollViewPadding} from 'constants/constants';

const CompanyListScreen = () => {
  const {companyList, sortAllCompany, searchInput, onChangeSeachInput} =
    useRootStore().service.company;
  const [visible, setVisible] = React.useState(false);

  const handleClickSort = () => {
    setVisible(!visible);
  };

  const navigation =
    useNavigation<NavigationTypeActivity<ACTIVITY_ROUTES.company_item>>();

  const navigateToNextScreen = useCallback(
    (id: string) => {
      navigation.navigate(ACTIVITY_ROUTES.company_item, {id});
    },
    [navigation],
  );

  const renderHeader = () => (
    <Header leftIcon="ArrowLeft" title="Company list" tokenBalance="$ 1971.2" />
  );

  const renderSearchInput = () => (
    <Field
      type="text"
      placeholderColor={COLORS.secondary_60}
      value={searchInput.value}
      onChangeText={onChangeSeachInput}
      renderLeftIcon={() => (
        <RN.View style={styles.searchInputIcon}>
          <Icons.Search color={COLORS.secondary_60} width={18} />
        </RN.View>
      )}
      placeholder="Search"
      inputContainerStyle={styles.searchInput}
    />
  );

  const renderCircleComponent = () => <CircleComponent />;

  const renderSortHaader = () => (
    <RN.View style={styles.sortHeader}>
      <RN.TouchableOpacity style={styles.sortItem} onPress={handleClickSort}>
        <Icons.Sort width={18} color={COLORS.green} />
        <CompanySort
          isVisible={visible}
          setIsVisible={setVisible}
          sortFuncAZ={() => sortAllCompany('AZ')}
          sortFuncZA={() => sortAllCompany('ZA')}
          sortFuncNew={() => sortAllCompany('NEW')}
          sortFuncOldest={() => sortAllCompany('OLD')}
        />
        <Text title="Sort" type="regularSmall" style={styles.sortItemText} />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity style={styles.sortItem}>
        <Icons.Filter width={17} color={COLORS.green} />
        <Text title="Filter" type="regularSmall" style={styles.sortItemText} />
      </RN.TouchableOpacity>
    </RN.View>
  );

  const renderCompanys = () => {
    const data = companyList.map(company => (
      <RN.View key={company.id} style={[styles.companyItem]}>
        <CompaniesCard
          color={company.backgroundColor}
          name={company.name}
          onPress={() => navigateToNextScreen(company.id)}
          logoHeight={SIZES.width * 0.2}
          logoWidth={SIZES.width * 0.2}
          titleCenter
          logo={{uri: company.logo}}
          containerStyle={styles.companyItemContainer}
        />
      </RN.View>
    ));

    return (
      <RN.ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={ScrollViewPadding}>
        <RN.View style={styles.companys}>{data}</RN.View>
      </RN.ScrollView>
    );
  };
  return (
    <IProvider>
      <RN.View style={styles.container}>
        {renderHeader()}
        {renderSearchInput()}
        {renderCircleComponent()}
        {renderSortHaader()}
        {renderCompanys()}
      </RN.View>
    </IProvider>
  );
};
export default observer(CompanyListScreen);
