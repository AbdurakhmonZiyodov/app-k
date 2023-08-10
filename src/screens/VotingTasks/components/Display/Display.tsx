import BannerTokens from 'components/RewardWidgets/components/BannerTokens';
import RN from 'components/RN';
import TimetoOver from 'components/TimetoOver';
import Text from 'components/UI/components/Text';
import {addAlpha} from 'constants/constants';
import SIZES from 'constants/sizes';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityBase, CompanyBase, Reward} from 'services/api';
import {styles} from './Display.styles';

interface DisplayProps {
  companyData: CompanyBase;
  activityData: Readonly<ActivityBase>;
}

const Display: FC<DisplayProps> = ({companyData, activityData}) => {
  const renderLogoImage = () => (
    <RN.View style={styles.logoImageContainer}>
      <RN.Image
        resizeMode="contain"
        style={styles.logoImage}
        source={{uri: companyData?.logo}}
      />
    </RN.View>
  );

  const renderTexts = () => (
    <Text
      title={'Big Mac or Big Tasty: chose which product is better?'}
      type="boldTitle1"
      style={styles.title}
    />
  );

  const renderDisplayFooter = () => (
    <RN.View style={styles.displayFooterContainer}>
      <TimetoOver timeToOver={activityData.endDateTime as string} />
      <RN.View style={styles.votingTextContainer}>
        <Text
          title="203 / 1000"
          type="regularCaption1"
          style={styles.votingText}
        />
      </RN.View>
      <RN.View style={styles.bannerContainer}>
        <BannerTokens tokens={activityData.reward as Reward} />
      </RN.View>
    </RN.View>
  );

  const renderDescription = () => (
    <RN.View style={styles.descriptionContainer}>
      <Text
        style={[styles.votingText, styles.description]}
        type="regularCaption1"
        title="English professional football club based in Fulham, southwest London. It plays in the English Premier League, the top division in the English football league system. Founded in 1905."
      />
    </RN.View>
  );

  return (
    <>
      <LinearGradient
        useAngle={true}
        angle={180}
        locations={[0, 1]}
        colors={[
          companyData.backgroundColor,
          addAlpha(companyData.backgroundColor, 0),
        ]}
        style={{
          height: SIZES.height * 0.45,
        }}>
        {renderLogoImage()}
        {renderTexts()}
        {renderDisplayFooter()}
        {renderDescription()}
      </LinearGradient>
    </>
  );
};

export default observer(Display);
