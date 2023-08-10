import IProvider from 'components/IProvider';
import {COLORS} from 'constants/colors';
import {observer} from 'mobx-react-lite';
import MarketplaceHeader from './components/MarketplaceHeader';
import MarketplaceProductList from './components/MarketplaceProductList';
import {styles} from './MarketplaceScreen.styles';

const MarketplaceScreen = () => (
  <IProvider style={styles.container} backgroundColor={COLORS.black1}>
    <>
      <MarketplaceHeader starCount={'7'} basketCount={'1'} />
      <MarketplaceProductList />
    </>
  </IProvider>
);
export default observer(MarketplaceScreen);
