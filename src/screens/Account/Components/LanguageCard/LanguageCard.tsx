import {Icons} from 'assets/icons';
import Images from 'assets/images';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import React, {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {styles} from './LanguageCard.style';

interface Props {
  countryName: string;
  countryFlag?: ImageSourcePropType;
  isActive?: any;
  id?: number;
  onClick?: () => void;
  date?: [];
}

const LanguageCard: FC<Props> = ({
  countryName,
  countryFlag,
  isActive,
  id,
  onClick,
}) => (
  <RN.TouchableOpacity style={styles.container} onPress={onClick}>
    <RN.View style={styles.country}>
      <RN.Image
        source={countryFlag ? countryFlag : Images.FLagImg.img1}
        resizeMode="contain"
        style={styles.flagImg}
      />
      <Text
        title={countryName ? countryName : 'England'}
        style={styles.title}
        type="regularCaption1"
      />
    </RN.View>
    {isActive === id ? (
      <Icons.CheckIcon size={14} color={COLORS.white} />
    ) : (
      <RN.View />
    )}
  </RN.TouchableOpacity>
);

export default LanguageCard;
