import Images from 'assets/images';
import Carousel from 'components/Carousel';
import Divider from 'components/Divider';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {ScrollViewPadding} from 'constants/constants';
import SIZES from 'constants/sizes';
import {FC} from 'react';
import {ListRenderItem} from 'react-native';
import MarketplaceProductItem from './MarketplaceProductItem';
import {styles} from './MarketplaceProductList.styles';

export type MocProduct = {
  source: ReturnType<typeof require>;
  status: 'DISCOUNT' | 'TOP';
  price: string;
  priceOld: string | null;
};

const mocData: MocProduct[] = [
  {
    source: Images.marketplace.marketplace1,
    status: 'DISCOUNT',
    price: '153$',
    priceOld: null,
  },
  {
    source: Images.marketplace.marketplace1,
    status: 'TOP',
    price: '100$',
    priceOld: '153$',
  },
  {
    source: Images.marketplace.marketplace1,
    status: 'TOP',
    price: '100$',
    priceOld: '153$',
  },
  {
    source: Images.marketplace.marketplace1,
    status: 'DISCOUNT',
    price: '100$',
    priceOld: '153$',
  },
  {
    source: Images.marketplace.marketplace1,
    status: 'TOP',
    price: '153$',
    priceOld: null,
  },
  {
    source: Images.marketplace.marketplace1,
    status: 'TOP',
    price: '153$',
    priceOld: null,
  },
];

const mocDataForStader = [
  {
    source: Images.marketplace.slider,
  },
  {
    source: Images.marketplace.slider,
  },
  {
    source: Images.marketplace.slider,
  },
];

interface MarketplaceProductListProps {
  isCarousel?: boolean;
}

const MarketplaceProductList: FC<MarketplaceProductListProps> = ({
  isCarousel = true,
}) => {
  const renderItem: ListRenderItem<MocProduct> = ({item}) => (
    <MarketplaceProductItem {...item} />
  );

  const renderCarousel = () => (
    <RN.View style={styles.carouselContainer}>
      <Carousel
        sliderWidth={SIZES.width}
        itemWidth={SIZES.width}
        data={mocDataForStader}
        renderItem={({item}: any) => (
          <RN.Image
            source={item.source}
            resizeMode={'cover'}
            style={styles.carouselImage}
          />
        )}
      />
    </RN.View>
  );

  const renderViewedProducts = () => (
    <>
      <Text
        title="Viewed products"
        type="boldCaptionTitle"
        style={styles.title}
      />

      <RN.FlatList
        keyExtractor={(_, key) => key.toString()}
        data={mocData}
        horizontal
        ItemSeparatorComponent={() => <Divider width={11} />}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  );

  const renderRecomendedProducts = () => (
    <>
      <Text
        title="Recomended products"
        type="boldCaptionTitle"
        style={styles.title}
      />

      <RN.FlatList
        keyExtractor={(_, key) => key.toString()}
        data={mocData}
        horizontal
        ItemSeparatorComponent={() => <Divider width={11} />}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  );

  const renderAreInDemand = () => (
    <>
      <Text
        title="Are in demand"
        type="boldCaptionTitle"
        style={styles.title}
      />

      <RN.FlatList
        keyExtractor={(_, key) => key.toString()}
        data={mocData}
        ItemSeparatorComponent={() => <Divider height={11} />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </>
  );

  const renderYourllLikeIt = () => (
    <>
      <Text
        title="You`ll like it"
        type="boldCaptionTitle"
        style={styles.title}
      />

      <RN.FlatList
        keyExtractor={(_, key) => key.toString()}
        data={mocData}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <Divider height={11} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </>
  );

  return (
    <RN.ScrollView
      contentContainerStyle={[ScrollViewPadding]}
      nestedScrollEnabled={true}>
      {isCarousel && renderCarousel()}
      <RN.View style={styles.container}>
        {renderViewedProducts()}
        {renderRecomendedProducts()}
        {renderAreInDemand()}
        {renderYourllLikeIt()}
      </RN.View>
    </RN.ScrollView>
  );
};

export default MarketplaceProductList;
