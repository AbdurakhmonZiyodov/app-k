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

const PaymentAdded = () => {
  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();
  const onClickedNavigation = () => {
    navigation.navigate(ACCOUNT_ROUTES.billing_edit);
  };

  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplates
          renderBtnTitle="Done"
          bottomBtnFunc={onClickedNavigation}>
          <RN.Image
            source={Images.WalletImg}
            resizeMode="contain"
            style={styles.image}
          />
          <Text
            title="Payment system added"
            style={styles.text}
            type="boldCaptionTitle"
          />
        </AccountTemplates>
      </RN.View>
    </IProvider>
  );
};

export default PaymentAdded;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.height / 20,
  },
  image: {
    width: SIZES.width / 1.1,
    height: SIZES.height / 2,
    marginLeft: SIZES.width / 35,
  },
  text: {
    color: COLORS.white,
    marginLeft: SIZES.width / 4,
  },
});
