import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {FC} from 'react';
import {styles} from './MarketplaceBonus.styles';
interface MarketplaceBonusProps {
  type: 'TOP' | 'HIT' | 'DISCOUNT';
}

const MarketplaceBonus: FC<MarketplaceBonusProps> = ({type}) => (
  <RN.View style={styles.textContainerStyle(type)}>
    <Text title={type} style={styles.textStyle(type)} type="boldCaption14" />
  </RN.View>
);

export default MarketplaceBonus;
