import IProvider from 'components/IProvider';
import RN from 'components/RN';
import AccountTemplate from 'components/Templates/AccountTemplates/AccountTemplate';
import Field from 'components/UI/components/Field';
import {COLORS} from 'constants/colors';
import SIZES from 'constants/sizes';
import PersonalInfo from './Components/PersonalInfo';

const PersonalInfoScreen = () => {
  const renderChildrenView = () => (
    <RN.View style={styles.renderView}>
      <RN.View style={styles.fieldView}>
        <Field placeholder="Name" type="text" />
        <Field
          placeholder="Surname"
          type="text"
          inputContainerStyle={styles.field}
        />
        <Field placeholder="email.com" type="text" />
      </RN.View>
    </RN.View>
  );

  const renderPersonalInfoAndEditPhoto = () => (
    <RN.View style={styles.personalView}>
      <PersonalInfo />
    </RN.View>
  );
  return (
    <IProvider>
      <RN.View style={styles.container}>
        <AccountTemplate title="Personal Info" renderBtnTitle="Change">
          {renderPersonalInfoAndEditPhoto()}
          {renderChildrenView()}
        </AccountTemplate>
      </RN.View>
    </IProvider>
  );
};
export default PersonalInfoScreen;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  renderView: {},
  fieldView: {
    marginTop: SIZES.height / 18,
  },
  field: {
    marginVertical: SIZES.height / 34,
  },
  personalView: {
    marginTop: SIZES.height / 29,
  },
});
