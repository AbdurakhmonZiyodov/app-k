import {Icons} from 'assets/icons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {addAlpha, HIT_SLOP} from 'constants/constants';
import SIZES from 'constants/sizes';
import useRootStore from 'hooks/useRootStore';
import useVisibility from 'hooks/useVisibility';
import React, {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MarketplaceBonus from '../MarketplaceBonus';
import {styles} from './MarketplaceItemDisplay.styles';

interface MarketplaceItemDisplayProps {
  backgroundColor: string;
  imageSource: ImageSourcePropType;
}

const MarketplaceItemDisplay: FC<MarketplaceItemDisplayProps> = ({
  backgroundColor,
  imageSource,
}) => {
  const {share} = useRootStore().service.company;
  const starVisibilty = useVisibility();

  return (
    <LinearGradient
      useAngle={true}
      angle={180}
      locations={[0, 1]}
      colors={[backgroundColor, addAlpha(backgroundColor, 0)]}
      style={{
        height: SIZES.height * 0.45,
      }}>
      <RN.View style={styles.headerImageContainer}>
        {!!imageSource && (
          <RN.Image
            source={imageSource}
            resizeMode={'contain'}
            style={styles.headerImage}
          />
        )}
      </RN.View>
      <RN.View style={styles.bonusContainer}>
        <MarketplaceBonus type="TOP" />
      </RN.View>

      <RN.View
        style={[RN.StyleSheet.absoluteFill, styles.headerBottomTextsContainer]}>
        <Text
          title="Animeted art"
          type="regularSmallTitle"
          textPosition="center"
          color="lightBlack"
        />
        <Text
          title="Metabobre #1"
          type="boldLargeTitle"
          textPosition="center"
        />

        <RN.View style={styles.iconContainer}>
          <RN.TouchableOpacity
            style={styles.iconContainer}
            hitSlop={HIT_SLOP}
            onPress={starVisibilty.toggleVisibility}>
            <Icons.StarIcon
              color={COLORS.white}
              width={22}
              fill={starVisibilty.visible ? 'white' : 'transparent'}
            />
          </RN.TouchableOpacity>
          <RN.TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              share.onPress().then(_ => {
                console.log(share.response);
              });
            }}>
            <Icons.Share color={COLORS.white} width={22} />
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>
    </LinearGradient>
  );
};

export default MarketplaceItemDisplay;
