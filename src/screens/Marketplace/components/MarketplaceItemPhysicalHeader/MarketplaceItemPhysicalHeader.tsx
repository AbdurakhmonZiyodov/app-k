import RN from 'components/RN';
import {styles} from './MarketplaceItemPhysicalHeader.styles';
import Header from 'components/Header/Header';
import {Icons} from 'assets/icons';
import {COLORS} from 'constants/colors';
import {scale} from 'constants/sizes';

export default () => (
  <RN.View style={styles.headerContainer}>
    <Header
      title="Man winter jackets"
      titleStyle={styles.headerTitle}
      iconOption={styles.headerLeftIcon}
      leftIcon={'ArrowLeft'}
      renderRightHeader={() => (
        <RN.TouchableOpacity>
          <Icons.BasketIcon color={COLORS.black} width={scale(24)} />
          <RN.View
            style={[styles.bandgeContainer, {backgroundColor: COLORS.yellow}]}>
            {/* <Text title={'2'} style={styles.badgeText} /> */}
          </RN.View>
        </RN.TouchableOpacity>
      )}
    />
  </RN.View>
);
