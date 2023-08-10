import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {addAlpha} from 'constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import MarketplaceBonus from '../MarketplaceBonus/MarketplaceBonus';
import {styles} from './MarketplaceItemPhysicalDisplay.styles';
import Carousel from 'components/Carousel/Carousel';
import SIZES from 'constants/sizes';
import Images from 'assets/images';
import Text from 'components/UI/components/Text/Text';

const mocDataForStader = [
  {
    source: Images.marketplacePhysical.marketplacePhysical1,
  },
  {
    source: Images.marketplacePhysical.marketplacePhysical2,
  },
  {
    source: Images.marketplacePhysical.marketplacePhysical3,
  },
];

export default () => (
  <RN.View style={styles.container}>
    <RN.View style={styles.bonusContainer}>
      <MarketplaceBonus type="DISCOUNT" />
    </RN.View>
    <Carousel
      sliderWidth={SIZES.width}
      itemWidth={SIZES.width}
      data={mocDataForStader}
      renderItem={({item}: any) => (
        <RN.View style={styles.carouselImageContainer}>
          <LinearGradient
            angle={180}
            locations={[0, 1]}
            colors={[addAlpha(COLORS.black2, 0), COLORS.black2]}
            style={styles.linearGradientContainer}
          />

          <RN.View style={styles.textsContainer}>
            <Text
              title={'Jacket'}
              textTransform="uppercase"
              type="regularSmallTitle"
              color="lightBlack"
            />
            <Text title="Puma 650" type="boldLargeTitle" />
          </RN.View>

          <RN.Image
            source={item.source}
            resizeMode={'contain'}
            style={styles.carouselImage}
          />
        </RN.View>
      )}
    />
  </RN.View>
);
