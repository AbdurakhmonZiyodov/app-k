import RN from 'components/RN';
import SIZES from 'constants/sizes';

import {AnimatedDate} from '../AnimationView/Date';
import MainLargeCard from './MainLargeCard';
import MainSmallCard from './MainSmallCard';
import MainStandartCard from './MainStandartCard';

const RenderCards = () => {
  const renderItem = () => (
    <RN.View style={styles.container}>
      {AnimatedDate.map(item => {
        if (item.size === 1) {
          return (
            <RN.View key={item.order}>
              <MainSmallCard
                title={item.subtitle}
                itemIcon={item.itemIcon}
                order={item.order}
                xLine={item.xLine}
                yLine={item.yLine}
                navigationPath={item.navigationPath}
              />
            </RN.View>
          );
        }
        if (item.size === 2) {
          return (
            <RN.View key={item.order}>
              <MainStandartCard
                title={item.subtitle}
                itemIcon={item.itemIcon}
                order={item.order}
                xLine={item.xLine}
                yLine={item.yLine}
                navigationPath={item.navigationPath}
              />
            </RN.View>
          );
        }
        if (item.size === 3) {
          return (
            <RN.View key={item.order}>
              <MainLargeCard
                title={item.subtitle}
                itemIcon={item.itemIcon}
                order={item.order}
                xLine={item.xLine}
                yLine={item.yLine}
                navigationPath={item.navigationPath}
              />
            </RN.View>
          );
        }
      })}
    </RN.View>
  );

  return <RN.View>{renderItem?.()}</RN.View>;
};

export default RenderCards;

const styles = RN.StyleSheet.create({
  container: {
    width: SIZES.width * 2.6,
    height: SIZES.height / 2,
    marginLeft: SIZES.width * -0.4,
    zIndex: 9,
  },
});
