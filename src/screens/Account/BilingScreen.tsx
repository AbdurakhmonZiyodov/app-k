import {useNavigation} from '@react-navigation/native';
import Images from 'assets/images';
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplates from 'components/Templates/AccountTemplates';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';

const BillingScreen = () => {
  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();
  const onClickedNavigation = () => {
    navigation.navigate(ACCOUNT_ROUTES.add_payment_system);
  };
  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplates
          title="Billing"
          renderBtnTitle="Add Card"
          bottomBtnFunc={onClickedNavigation}>
          <RN.Image
            source={Images.WalletImg}
            resizeMode="contain"
            style={styles.image}
          />
          <Text title="No Card" style={styles.text} type="boldCaptionTitle" />
        </AccountTemplates>
      </RN.View>
    </IProvider>
  );
};

export default BillingScreen;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: SIZES.width / 1.1,
    height: SIZES.height / 2,
    marginLeft: SIZES.width / 35,
  },
  text: {
    color: COLORS.white,
    marginLeft: SIZES.width / 2.5,
  },
});
