/* eslint-disable no-undef */
import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplate from 'components/Templates/AccountTemplates/AccountTemplate';
import SIZES from 'constants/sizes';
import {observer} from 'mobx-react-lite';
import {ACCOUNT_ROUTES} from 'navigation/routes';
import {ListRenderItem} from 'react-native';
import {styles} from './AccountScreen.styles';
import AccountListItem from './Components/AccountListItem';
import PersonalInfo from './Components/PersonalInfo';
import {accountList} from './data/Account.data';

interface RenderItemProps {
  title: string;
  Path: ACCOUNT_ROUTES;
  Icon: (props: any) => JSX.Element;
}

const AccountScreen = () => {
  const renderItem: ListRenderItem<RenderItemProps> = ({item: Item}) => (
    <AccountListItem
      Icon={Item.Icon}
      label={Item.title}
      labelStyle={styles.labelStyle}
      navigationPath={Item.Path}
    />
  );

  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplate
          title="Account"
          titleStyle={{marginLeft: SIZES.width / -20}}>
          <PersonalInfo />
          <RN.View style={styles.navigateMenu}>
            <RN.FlatList
              data={accountList}
              keyExtractor={(_, key) => key.toString()}
              renderItem={renderItem}
            />
          </RN.View>
        </AccountTemplate>
      </RN.View>
    </IProvider>
  );
};
export default observer(AccountScreen);
