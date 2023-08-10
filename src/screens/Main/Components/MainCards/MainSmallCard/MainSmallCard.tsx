import {useNavigation} from '@react-navigation/native';
import Images from 'assets/images';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {MainCardType} from 'constants/types';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import {FC, useCallback} from 'react';
import {styles} from './MainSmallCard.style';

const MainSmallCard: FC<MainCardType> = props => {
  const title = props.title ? props.title : 'Tasks';
  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();

  const navigateToNextScreen = useCallback(() => {
    console.log('props.navigationPath', props.navigationPath);
    if (!props.navigationPath) return;
    navigation.navigate(props.navigationPath);
  }, [navigation, props.navigationPath]);

  const itemIcon = props.itemIcon ? props.itemIcon : Images.MainItmes.tasks3;
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
      onPress={navigateToNextScreen}>
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

export default MainSmallCard;
