import RN from 'components/RN';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import NavigationService from 'navigation/NavigationService';
import {MARKETPLACE_ROUTES} from 'navigation/routes';
import {ButtonType} from 'types';
import {styles} from './MarketplaceDisplayHeader.styles';

export default () => (
  <RN.View style={styles.container}>
    <RN.View style={styles.titlesContainer}>
      <Text title="100$" type="boldLargeTitle" />
      <Text title="153$" type="boldCallout" style={styles.subTitle} />
    </RN.View>
    <RN.View style={styles.descriptionContainer}>
      <Text title="ABOUT" type="boldSmall" paddingBottom={8} />
      <Text
        title="English professional football club based in Fulham, southwest London. It plays in the English Premier League, the top division in the English football league system. Founded in 1905."
        type="regularCaption1"
      />
    </RN.View>

    <PrimaryButtonLarge
      title="Add to bag"
      textPosition="center"
      type={ButtonType.FILLED}
      onPress={() => {
        NavigationService.navigate(MARKETPLACE_ROUTES.checkout);
      }}
      style={styles.addButton}
      titleStyle={styles.addButtonText}
    />
  </RN.View>
);
