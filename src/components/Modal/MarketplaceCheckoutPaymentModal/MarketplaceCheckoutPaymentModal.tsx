import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import {Icons} from 'assets/icons';
import SvgImages from 'assets/svgImages';
import RN from 'components/RN';
import SwipeableModal from 'components/SwipeableModal';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import useVisibility from 'hooks/useVisibility';
import {FC, RefObject} from 'react';
import {IHandles} from 'react-native-modalize/lib/options';
import {ButtonType} from 'types';
import {styles} from './MarketplaceCheckoutPaymentModal.styles';

interface MarketplaceCheckoutPaymentModalProps {
  modalizeRef: RefObject<IHandles>;
  onClose?(): void;
}

const MarketplaceCheckoutPaymentModal: FC<
  MarketplaceCheckoutPaymentModalProps
> = ({modalizeRef, onClose}) => {
  const checkboxVisiblity = useVisibility(true);
  const checkboxColor = checkboxVisiblity.visible ? 'green' : 'grey';

  return (
    <SwipeableModal
      modalizeRef={modalizeRef}
      modalStyle={styles.mainContainer}
      backgroundColor={COLORS.black2}
      title="Payment method"
      closeOnOverlayTap={false}
      scrollViewProps={{
        bounces: false,
        style: styles.contentStyle,
      }}
      FooterComponent={
        <RN.View style={styles.footerContainer}>
          <PrimaryButtonLarge
            title="Add payment method"
            textPosition="center"
            style={styles.buttonContainer}
            titleStyle={styles.buttonText}
            type={ButtonType.FILLED}
            onPress={onClose}
          />
        </RN.View>
      }>
      <RN.View>
        <RN.TouchableOpacity style={styles.itemContainer}>
          <Icons.Card width={22} color={COLORS.grey} />
          <Text
            color="grey"
            title="Card  ending on 0606"
            type="boldCaption14"
            paddingLeft={11}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity style={styles.itemContainer}>
          <Icons.Card width={22} color={COLORS.grey} />
          <Text
            color="grey"
            title="Card  ending on 0612"
            type="boldCaption14"
            paddingLeft={11}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity style={styles.itemContainer}>
          <SvgImages.ApplePay color={COLORS.grey} width={25} height={25} />
          <Text
            color="grey"
            title="Apple pay"
            type="boldCaption14"
            paddingLeft={11}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity
          style={styles.itemContainer}
          onPress={checkboxVisiblity.toggleVisibility}>
          <ColoredIcons.LoginHeaderLogoIcon
            color={COLORS[checkboxColor]}
            width={22}
          />
          <Text
            color={checkboxColor}
            title="2000# From your balance"
            type="boldCaption14"
            paddingLeft={11}
          />

          {checkboxVisiblity.visible && (
            <RN.View style={styles.checkboxContainer}>
              <Icons.CheckIcon color={COLORS.green} size={20} />
            </RN.View>
          )}
        </RN.TouchableOpacity>
      </RN.View>
    </SwipeableModal>
  );
};

export default MarketplaceCheckoutPaymentModal;
