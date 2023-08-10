import {Icons} from 'assets/icons';
import RN from 'components/RN';
import UI from 'components/UI';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {ActivityType, Reward} from 'services/api';
import BannerTokens from './components/BannerTokens';
import BottomBannerCard from './components/BottomBannerCard';
import {styles} from './RewardWidgets.styles';

type WidgetsProps = {
  widgetsType: ActivityType;
  title: string;
  timeToOver?: string;
  tokens: Reward;
  logo?: ImageSourcePropType;
  itemImage1?: ImageSourcePropType;
  itemImage2?: ImageSourcePropType;
  cardStyle?: StyleProp<ViewStyle>;
  peopleAprove?: any;
  onPress?(): void;
};

const RewardBannerWidgets: FC<WidgetsProps> = ({
  title,
  cardStyle,
  peopleAprove,
  timeToOver,
  widgetsType,
  tokens,
  itemImage1,
  itemImage2,
  onPress,
  logo,
}) => {
  const topBannerCard = () => (
    <RN.View style={styles.topBannarCard}>
      {logo ? (
        <RN.Image source={logo} style={styles.logo} resizeMode={'contain'} />
      ) : (
        <Icons.RewardBannerIcon />
      )}
      <BannerTokens tokens={tokens} />
    </RN.View>
  );
  const centerBannerCard = () => (
    <RN.View style={styles.centerBannerCard}>
      <UI.Text
        title={title}
        style={styles.centerCardTitle}
        type="boldCaptionTitle"
      />
    </RN.View>
  );

  return (
    <RN.TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, cardStyle]}>
      {topBannerCard()}
      {centerBannerCard()}
      <BottomBannerCard
        image1={itemImage1}
        image2={itemImage2}
        timeToOver={timeToOver}
        peopleAprove={peopleAprove}
        widgetsType={widgetsType}
      />
    </RN.TouchableOpacity>
  );
};
export default observer(RewardBannerWidgets);
