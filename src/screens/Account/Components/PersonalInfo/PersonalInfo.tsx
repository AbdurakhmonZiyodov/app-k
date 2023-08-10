import {Icons} from 'assets/icons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {styles} from './PersonalInfo.styles';

interface Props {
  name?: string;
  email?: string;
  avatar?: ImageSourcePropType;
}

const PersonalInfo: FC<Props> = ({avatar, email, name}) => (
  <RN.View style={styles.container}>
    <RN.View style={styles.avatarView}>
      {avatar ? (
        <RN.Image source={avatar} />
      ) : (
        <Icons.AvatarIcon iconWidth={64} iconHeight={64} color={COLORS.white} />
      )}
    </RN.View>

    <Text
      title={name ? name : 'Name Surname'}
      style={styles.title}
      type="boldCaptionTitle"
    />
    <Text
      title={email ? email : 'name@mail.com'}
      style={styles.subtitle}
      type="boldSmall"
    />
  </RN.View>
);
export default PersonalInfo;
