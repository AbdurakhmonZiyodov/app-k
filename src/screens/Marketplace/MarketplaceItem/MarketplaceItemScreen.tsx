import IProvider from 'components/IProvider';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {ScrollViewPadding} from 'constants/constants';
import useRootStore from 'hooks/useRootStore';
import MarketplaceDisplayHeader from '../components/MarketplaceDisplayHeader';
import MarketplaceItemDisplay from '../components/MarketplaceItemDisplay';
import MarketplaceItemHeader from '../components/MarketplaceItemHeader';
import MarketplaceProductList from '../components/MarketplaceProductList';
import {styles} from './MarketplaceItemScreen.styles';

const MarketplaceItemScreen = () => {
  const productColor = COLORS.green2;
  const mocImage = useRootStore().service.company.companyList[0]?.logo;
  return (
    <IProvider backgroundColor={productColor}>
      <RN.View style={styles.container}>
        <MarketplaceItemHeader title="Digital" />
        <RN.ScrollView
          nestedScrollEnabled={true}
          bounces={false}
          style={styles.container}
          contentContainerStyle={[styles.scrollView, ScrollViewPadding]}>
          <MarketplaceItemDisplay
            imageSource={{uri: mocImage}}
            backgroundColor={productColor}
          />
          <MarketplaceDisplayHeader />
          <MarketplaceProductList isCarousel={false} />
        </RN.ScrollView>
      </RN.View>
    </IProvider>
  );
};

export default MarketplaceItemScreen;
