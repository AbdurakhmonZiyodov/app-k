import Images from 'assets/images';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
import {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Reward, RewardType} from 'services/api';
type Props = {
  tokens: Reward;
  cardStyle?: StyleProp<ViewStyle>;
};
const BannerTokens: FC<Props> = ({tokens, cardStyle}) => {
  const Icon = RewardType.TOKEN
    ? Images.BannerTokens.img1
    : Images.BannerTokens.img2;
  const CardStyle = cardStyle || {};
  return (
    <RN.View style={[styles.container, CardStyle]}>
      <RN.Image source={Icon} style={styles.image} resizeMode="contain" />
      <RN.View style={styles.titleCard}>
        <RN.Text style={styles.tokensTitle}>
          {`+ ${tokens?.value}`} {tokens?.type ?? ''}
        </RN.Text>
      </RN.View>
    </RN.View>
  );
};

export default BannerTokens;

const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 3,
    width: SIZES.width / 4.8,
    height: SIZES.height / 42,
    paddingHorizontal: 6,
  },
  image: {
    width: 12,
    height: 12,
  },
  titleCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '100%',
  },
  tokensTitle: {
    color: COLORS.green,
    fontSize: 8,
  },
});
