import {Icons} from 'assets/icons';
import Header from 'components/Header';
import IProvider from 'components/IProvider';
import MarketplaceCheckoutPaymentModal from 'components/Modal/MarketplaceCheckoutPaymentModal';
import RN from 'components/RN';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {HIT_SLOP, ScrollViewPadding} from 'constants/constants';
import {useRef} from 'react';
import {IHandles} from 'react-native-modalize/lib/options';
import {ButtonType} from 'types';
import MarketplaceCheckoutCardList from '../components/MarketplaceCheckoutCardList';
import {styles} from './MarketplaceCheckoutScreen.styles';

export default function MarketplaceCheckoutScreen() {
  const modalizeRef = useRef<IHandles>(null);
  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };
  return (
    <IProvider backgroundColor={COLORS.black2}>
      <Header
        leftIcon="ArrowLeft"
        title={'Checkout'}
        renderRightHeader={() => (
          <RN.TouchableOpacity hitSlop={HIT_SLOP} onPress={() => {}}>
            <RN.View style={styles.headerCircleIcon} />
            <Icons.BasketIcon color={COLORS.white} width={22} />
          </RN.TouchableOpacity>
        )}
      />
      <RN.View style={styles.container}>
        <RN.ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={ScrollViewPadding}
          showsVerticalScrollIndicator={false}>
          <MarketplaceCheckoutCardList />
          <RN.View style={styles.paymentMethodContainer}>
            <Text title="Payment method" type="boldCaptionTitle" />
            <RN.View style={styles.coinContainer}>
              <Text title="KAIF Coin" type="boldCaption14" />
              <RN.TouchableOpacity activeOpacity={0.5}>
                <Icons.ArrowLeft
                  width={22}
                  color={COLORS.white}
                  style={styles.rightArrow}
                />
              </RN.TouchableOpacity>
            </RN.View>
          </RN.View>
          <RN.View style={styles.orderInfoContainer}>
            <Text
              title="Order info"
              type="boldCaptionTitle"
              paddingBottom={13}
            />

            <RN.View style={styles.orderInfoItemContainer}>
              <Text title="Quantity" type="boldCaption14" color="grey" />
              <Text title="2" type="boldCaption14" />
            </RN.View>
            <RN.View style={styles.orderInfoItemContainer}>
              <Text title="Sum" type="boldCaption14" color="grey" />
              <Text title="1.89200" type="boldCaption14" />
            </RN.View>
            <RN.View style={styles.orderInfoItemContainer}>
              <Text title="Discount" type="boldCaption14" color="grey" />
              <Text title="0" type="boldCaption14" />
            </RN.View>
            <RN.View style={styles.orderInfoItemContainer}>
              <Text title="Total amount" type="boldCaption14" color="grey" />
              <Text title="1.89200" type="boldCaption14" />
            </RN.View>
          </RN.View>

          <PrimaryButtonLarge
            title="Checkout (1.89200 ETH)"
            textPosition="center"
            style={styles.buttonContainer}
            titleStyle={styles.buttonText}
            type={ButtonType.FILLED}
            onPress={openModal}
          />
        </RN.ScrollView>

        <MarketplaceCheckoutPaymentModal
          modalizeRef={modalizeRef}
          onClose={closeModal}
        />
      </RN.View>
    </IProvider>
  );
}
