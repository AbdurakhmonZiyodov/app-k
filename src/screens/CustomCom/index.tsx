import {Icons} from 'assets/icons';
import Header from 'components/Header';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';

const MarketplaceScreen = () => (
  <RN.View>
    <Header
      title="Main screen"
      leftRenderIcon={() => <Icons.ArrowLeft width={20} color={COLORS.white} />}
    />
  </RN.View>
);
export default MarketplaceScreen;
