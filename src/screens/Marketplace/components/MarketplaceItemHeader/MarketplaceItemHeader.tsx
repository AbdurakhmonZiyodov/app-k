import {Icons} from 'assets/icons';
import Header from 'components/Header';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {HIT_SLOP} from 'constants/constants';
import React from 'react';
import {styles} from './MarketplaceItemHeader.styles';

interface MarketplaceItemHeaderProps {
  title?: string;
}

export default ({title}: MarketplaceItemHeaderProps) => (
  <RN.View style={styles.headerTopContainer}>
    <Header
      leftIcon="ArrowLeft"
      title={title}
      renderRightHeader={() => (
        <RN.TouchableOpacity hitSlop={HIT_SLOP} onPress={() => {}}>
          <RN.View style={styles.headerCircleIcon} />
          <Icons.BasketIcon color={COLORS.white} width={22} />
        </RN.TouchableOpacity>
      )}
    />
  </RN.View>
);
