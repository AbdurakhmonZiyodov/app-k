/* eslint-disable no-undef */
import {useNavigation} from '@react-navigation/native';
import {NotificationType} from 'components/Notification/Notification.types';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import Notifications from 'contexts/Notifications';
import {NavigationTypeAccount} from 'navigation/BottomTabNavigation/stacks/Account/AccountStack';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import {FC} from 'react';
import {Alert, StyleProp, ViewStyle} from 'react-native';

interface AccountListItemProps {
  Icon: (props: any) => JSX.Element;
  label?: string;
  labelStyle?: StyleProp<ViewStyle>;
  content?: any;
  onPress?: () => void;
  navigationPath: ACCOUNT_ROUTES;
}

const AccountListItem: FC<AccountListItemProps> = ({
  Icon,
  label,
  labelStyle,
  content,
  navigationPath,
}) => {
  const notPath =
    label === 'Notification' ? Alert.alert('not path') : navigationPath;

  const navigation =
    useNavigation<NavigationTypeAccount<ACCOUNT_ROUTES.home>>();

  const onClickedNavigation = () => {
    if (
      ACCOUNT_ROUTES.notifaction === navigationPath ||
      ACCOUNT_ROUTES.faq_support === navigationPath
    ) {
      Notifications.show({
        title: 'TBD screen',
        autoCloseTime: 1000,
        notificationType: NotificationType.INFO,
        backgroundColor: COLORS.blue,
      });
    } else {
      return navigation.navigate(notPath as ACCOUNT_ROUTES);
    }
  };

  return (
    <RN.TouchableOpacity activeOpacity={0.5} onPress={onClickedNavigation}>
      <RN.View style={styles.itemContainer}>
        <RN.View style={styles.itemLeftContainer}>
          <RN.View style={styles.itemIconCard}>
            <Icon size={20} height={20} width={20} color={COLORS.green} />
          </RN.View>
          {label && (
            <Text title={label} style={labelStyle} type="boldCaptionTitle" />
          )}
          {!label && content}
        </RN.View>
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default AccountListItem;

const styles = RN.StyleSheet.create({
  itemContainer: {
    paddingVertical: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'red',
  },
  itemLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19,
  },
  itemIconCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1.2,
  },
  arrowRight: {
    width: 0.8,
    height: 1.4,
    color: COLORS.green,
  },
});
