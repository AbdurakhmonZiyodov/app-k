import IProvider from 'components/IProvider/IProvider';
import RN from 'components/RN/RN';
import {COLORS} from 'constants/colors';

import {ScrollViewPadding} from 'constants/constants';
import MarketplaceItemPhysicalDisplay from '../components/MarketplaceItemPhysicalDisplay';
import MarketplaceItemPhysicalHeader from '../components/MarketplaceItemPhysicalHeader/MarketplaceItemPhysicalHeader';
import MarketplaceItemPhysicalMain from '../components/MarketplaceItemPhysicalMain/MarketplaceItemPhysicalMain';
import {styles} from './MarketplaceItemPhysicalScreen.styles';

export default () => (
  <IProvider backgroundColor={COLORS.white2} barStyle={'dark-content'}>
    <RN.View style={styles.container}>
      <RN.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={ScrollViewPadding}>
        <MarketplaceItemPhysicalHeader />
        <MarketplaceItemPhysicalDisplay />
        <MarketplaceItemPhysicalMain />
      </RN.ScrollView>
    </RN.View>
  </IProvider>
);
