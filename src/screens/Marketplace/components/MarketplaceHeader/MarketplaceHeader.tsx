import {Icons} from 'assets/icons';
import CircleComponent from 'components/CircleComponent';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {scale} from 'constants/sizes';
import {FC} from 'react';
import {styles} from './MarketplaceHeader.styles';

interface MarketplaceHeaderProps {
  starCount: string;
  basketCount: string;
}

const MarketplaceHeader: FC<MarketplaceHeaderProps> = ({
  starCount,
  basketCount,
}) => {
  const renderLeftSection = () => (
    <RN.View style={styles.leftSection}>
      <RN.TouchableOpacity>
        <Icons.StarIcon color={COLORS.white} width={scale(24)} />
        <RN.View
          style={[styles.bandgeContainer, {backgroundColor: COLORS.green}]}>
          <Text title={starCount} style={styles.badgeText} />
        </RN.View>
      </RN.TouchableOpacity>
    </RN.View>
  );

  const renderCenterSection = () => (
    <RN.View style={styles.centerSection}>
      <RN.View style={styles.tabBarButtonsContainer}>
        <RN.TouchableOpacity style={styles.tabBarButton}>
          <Text
            title="Digital"
            type="boldSmall"
            style={styles.tabBarButtonText}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity
          style={[styles.tabBarButton, styles.activeTabBarButton]}>
          <Text
            title="Physical"
            type="boldSmall"
            style={styles.tabBarButtonText}
          />
        </RN.TouchableOpacity>
        <RN.TouchableOpacity style={styles.tabBarButton}>
          <Text title="NFT" type="boldSmall" style={styles.tabBarButtonText} />
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );

  const renderRightSection = () => (
    <RN.View style={styles.rightSection}>
      <RN.TouchableOpacity>
        <Icons.BasketIcon color={COLORS.white} width={scale(24)} />
        <RN.View
          style={[styles.bandgeContainer, {backgroundColor: COLORS.yellow}]}>
          <Text title={basketCount} style={styles.badgeText} />
        </RN.View>
      </RN.TouchableOpacity>
    </RN.View>
  );

  const renderCircleList = () => (
    <RN.View style={styles.circleListContainer}>
      <CircleComponent />
    </RN.View>
  );

  const renderSortAndFilter = () => (
    <RN.View style={styles.sortFilterContainer}>
      <RN.TouchableOpacity style={styles.sortFilterButton}>
        <Icons.Sort color={COLORS.green} width={scale(22)} />
        <Text title="Sort" color="white" type="regularSmall" paddingLeft={7} />
      </RN.TouchableOpacity>

      <RN.TouchableOpacity style={styles.sortFilterButton}>
        <Icons.Filter color={COLORS.green} width={scale(18)} />
        <Text
          title="Filter"
          color="white"
          type="regularSmall"
          paddingLeft={7}
        />
      </RN.TouchableOpacity>
    </RN.View>
  );
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.header}>
        {renderLeftSection()}
        {renderCenterSection()}
        {renderRightSection()}
      </RN.View>

      {renderCircleList()}
      {renderSortAndFilter()}
    </RN.View>
  );
};

export default MarketplaceHeader;
