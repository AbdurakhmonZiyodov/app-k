import {useNavigation} from '@react-navigation/native';
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplates from 'components/Templates/AccountTemplates';
import Field from 'components/UI/components/Field';
import SIZES from 'constants/sizes';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import OnChangeCountry from './Components/OnChangeCountry';

const AddPaymentScreen = () => {
  const store = useRootStore().service.account;
  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();
  const onClickedNavigation = () => {
    navigation.navigate(ACCOUNT_ROUTES.payment_system_added);
  };
  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplates
          title="Add Payment system"
          renderBtnTitle="Add Card"
          bottomBtnFunc={onClickedNavigation}>
          <RN.View style={styles.cardView}>
            <Field
              placeholder="Name on Card"
              type="text"
              value={store.addPayment.cardName}
              inputContainerStyle={styles.field}
              onChangeText={e => store.changeValue(e, 'cardName')}
            />
            <Field
              placeholder="0000 0000 0000 0000"
              type="text"
              keyboardType="numeric"
              value={store.addPayment.cardNumber}
              inputContainerStyle={styles.field}
              onChangeText={e => store.changeValue(e, 'oldCardNumber')}
            />
            <RN.View style={styles.rowView}>
              <Field
                placeholder="MM/YY "
                type="number"
                value={store.addPayment.endDate}
                keyboardType="numeric"
                inputContainerStyle={styles.rowField}
                onChangeText={e => store.changeValue(e, 'endDate')}
              />
              <Field
                placeholder="CVC"
                type="text"
                value={store.addPayment.cvc}
                inputContainerStyle={styles.rowField}
                onChangeText={e => store.changeValue(e, 'cvc')}
                maxLength={5}
              />
            </RN.View>
            <OnChangeCountry />
          </RN.View>
        </AccountTemplates>
      </RN.View>
    </IProvider>
  );
};

export default observer(AddPaymentScreen);

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    marginTop: SIZES.height / 21,
  },
  field: {
    marginTop: SIZES.height / 33,
  },
  rowView: {
    marginTop: SIZES.height / 33,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowField: {
    width: '48%',
  },
});
