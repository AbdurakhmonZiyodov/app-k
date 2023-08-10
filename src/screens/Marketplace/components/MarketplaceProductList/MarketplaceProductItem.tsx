import {useNavigation} from '@react-navigation/native';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {HIT_SLOP, addAlpha} from 'constants/constants';
import {NavigationTypeMarketplace} from 'navigation/BottomTabNavigation/stacks/Marketplace/MarketplaceStack';
import {MARKETPLACE_ROUTES} from 'navigation/routes';
import {FC, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {MocProduct} from './MarketplaceProductList';
import {styles} from './MarketplaceProductList.styles';
import {Icons} from 'assets/icons';
import useVisibility from 'hooks/useVisibility';

const MarketplaceProductItem: FC<MocProduct> = ({
  price,
  priceOld,
  source,
  status,
}) => {
  const isTop = status === 'TOP';
  const starVisibilty = useVisibility();
  const navigation =
    useNavigation<NavigationTypeMarketplace<MARKETPLACE_ROUTES.home>>();

  const navigateToNextScreen = useCallback(() => {
    navigation.navigate(MARKETPLACE_ROUTES.product_item, {});
  }, [navigation]);

  return (
    <RN.TouchableOpacity activeOpacity={0.5} onPress={navigateToNextScreen}>
      <LinearGradient
        angle={104.9}
        style={styles.linearGradentContainer}
        locations={[0.7 * 0.01, 1]}
        colors={[COLORS.black2, addAlpha(COLORS.black6, 0.5)]}>
        <RN.View
          style={[
            styles.status,
            {backgroundColor: COLORS[!isTop ? 'green' : 'black']},
          ]}>
          <Text title={status} color={isTop ? 'green' : 'black'} />
        </RN.View>

        <RN.View style={styles.starIcon}>
          <RN.TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={starVisibilty.toggleVisibility}>
            <Icons.StarIcon
              color={COLORS.black2}
              width={15}
              fill={starVisibilty.visible ? 'black2' : 'transparent'}
            />
          </RN.TouchableOpacity>
        </RN.View>
        <RN.View style={styles.cardContainer}>
          <RN.Image
            source={source}
            style={styles.cardImage}
            resizeMode={'cover'}
          />
          <RN.View style={styles.cardFooter}>
            <Text title="Metabobre #2" type="regularCaption1" paddingTop={4} />

            <Text
              title="Animated art"
              type="regularSmallTitle"
              color={'grey'}
            />

            <RN.View style={styles.priceSection}>
              <Text title={price} type="boldCaption1" paddingBottom={8} />
              {!!priceOld && (
                <Text
                  title={priceOld}
                  type="regularSmallTitle"
                  paddingLeft={4}
                  style={styles.oldPrice}
                  paddingBottom={8}
                />
              )}

              <RN.View style={styles.basketIcon2Container}>
                <LinearGradient
                  angle={104.9}
                  style={styles.basketIcon2}
                  locations={[0.7 * 0.01, 1]}
                  colors={[COLORS.black2, addAlpha(COLORS.black6, 0.5)]}>
                  <Icons.BasketIcon2 width={12} color={COLORS.grey} />
                </LinearGradient>
              </RN.View>
            </RN.View>
          </RN.View>
        </RN.View>
      </LinearGradient>
    </RN.TouchableOpacity>
  );
};

export default MarketplaceProductItem;
