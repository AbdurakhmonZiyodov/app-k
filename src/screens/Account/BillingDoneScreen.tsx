import {useNavigation} from '@react-navigation/native';
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import ScreenTitle from 'components/ScreenTitle';
import AccountTemplate from 'components/Templates/AccountTemplates/AccountTemplate';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import BillingCard from './Components/BillingCard';

const BillingDone = () => {
  const navigation1 =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();
  const onClickedNavigation1 = () => {
    navigation1.navigate(ACCOUNT_ROUTES.billing_edit);
  };

  const navigation2 =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();
  const onClickedNavigation2 = () => {
    navigation2.navigate(ACCOUNT_ROUTES.add_payment_system);
  };

  const renderRightBtn = () => (
    <RN.TouchableOpacity onPress={onClickedNavigation1}>
      <Text
        title="Done"
        style={styles.rightHeaderView}
        type="boldCaptionTitle"
      />
    </RN.TouchableOpacity>
  );
  return (
    <IProvider>
      <AccountTemplate
        title="Billing"
        renderBtnTitle="Add Card"
        bottomBtnFunc={onClickedNavigation2}
        renderRight={renderRightBtn}>
        <RN.View style={styles.container}>
          <BillingCard isSelected cardType="editing" />
          <BillingCard cardType="editing" />
          <ScreenTitle title="Payment history" style={styles.screenTitle} />
          <BillingCard isSelected />
          <BillingCard />
        </RN.View>
      </AccountTemplate>
    </IProvider>
  );
};

export default BillingDone;

const styles = RN.StyleSheet.create({
  container: {
    marginTop: SIZES.height / 21,
  },
  rightHeaderView: {
    color: COLORS.green,
  },
  screenTitle: {
    marginTop: SIZES.height / 30,
  },
});
