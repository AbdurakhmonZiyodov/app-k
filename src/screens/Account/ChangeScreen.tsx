import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplate from 'components/Templates/AccountTemplates/AccountTemplate';
import Field from 'components/UI/components/Field';
import {COLORS} from 'constants/colors';

const ChangeScreen = () => {
  const renderView = () => (
    <RN.View style={styles.renderView}>
      <Field placeholder="Current Password" type="password" />
      <Field
        placeholder="New Password"
        type="password"
        inputContainerStyle={styles.field}
      />
    </RN.View>
  );

  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplate title="Change password" renderBtnTitle="Change">
          {renderView()}
        </AccountTemplate>
      </RN.View>
    </IProvider>
  );
};

export default ChangeScreen;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  renderView: {
    marginTop: 30,
  },
  field: {
    marginTop: 24,
  },
});
