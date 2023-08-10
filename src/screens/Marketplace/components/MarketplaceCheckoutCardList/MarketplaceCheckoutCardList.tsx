import {Icons} from 'assets/icons';
import Images from 'assets/images';
import SvgImages from 'assets/svgImages';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {styles} from './MarketplaceCheckoutCardList.styles';
export default () => {
  const renderItem = () => (
    <RN.View style={styles.cardContainer}>
      <RN.Image
        source={Images.marketplace.marketplace1}
        resizeMode={'cover'}
        style={styles.cardImage}
      />

      <RN.View style={styles.mainOfCard}>
        <RN.View style={styles.textsContainer}>
          <Text
            title="animated art"
            type="boldSmall"
            color="lightBlack"
            textTransform={'uppercase'}
          />
          <Text title="Metabobre #1" type="boldCaptionTitle" paddingTop={12} />
          <RN.View style={styles.coinIconContainer}>
            <SvgImages.CoinIcon />
            <Text title="0.946" paddingLeft={4} type={'boldSmall'} />
          </RN.View>
        </RN.View>

        <RN.TouchableOpacity
          activeOpacity={0.5}
          style={styles.deleteButtonContainer}>
          <RN.View style={styles.deleteButton}>
            <Icons.TrashIcon size={18} />
          </RN.View>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );

  return (
    <RN.View style={styles.container}>
      <Text title="My cart" type="boldCaptionTitle" paddingBottom={21} />
      {renderItem()}
      {renderItem()}
    </RN.View>
  );
};
