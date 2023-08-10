import {useNavigation} from '@react-navigation/native';
import Images from 'assets/images';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {MainCardType} from 'constants/types';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import {FC} from 'react';
import {styles} from './MainCard.style';

const MainLargeCard: FC<MainCardType> = props => {
  const title = props.title ? props.title : 'Companies';

  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();

  const onclick = () => {
    navigation.navigate(props.navigationPath);
  };

  const itemIcon = props.itemIcon
    ? props.itemIcon
    : Images.MainItmes.companiesImg;

  const rStyles = RN.StyleSheet.create({
    card: {
      position: 'absolute',
      transform: [
        {translateX: props.xLine as number},
        {translateY: props.yLine as number},
      ],
      top: props.yLine,
      left: props.xLine,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#313131',
    },
  });

  return (
    <RN.TouchableOpacity
      style={[styles.container, rStyles.card]}
      onPress={onclick}>
      <RN.View style={styles.card}>
        <RN.Image
          source={itemIcon}
          style={[styles.img, props.iconStyle]}
          resizeMode="cover"
        />
        <Text title={title} type="regularFootnote2" style={styles.title} />
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default MainLargeCard;
