import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {FC} from 'react';
import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {styles} from './CompaniesCard.style';

type Props = {
  name?: string;
  logo?: ImageSourcePropType;
  logoWidth?: number;
  logoHeight?: number;
  color?: string;
  titleCenter?: boolean;
  onPress?(): void;
  containerStyle?: StyleProp<ViewStyle>;
};

const CompaniesCard: FC<Props> = ({
  name,
  logo,
  logoWidth,
  logoHeight,
  color,
  titleCenter,
  onPress,
  containerStyle,
}) => {
  const CompanyName = name ? name : 'Company';
  const TitleCenter = titleCenter ? 'center' : 'flex-start';
  return (
    <RN.TouchableOpacity
      style={[styles.container, {backgroundColor: color}, containerStyle]}
      onPress={onPress}>
      <RN.View style={styles.logoCard}>
        <RN.Image
          source={logo}
          style={[styles.logoStyles, {width: logoWidth, height: logoHeight}]}
          resizeMode="contain"
        />
        <RN.View style={[styles.brandNameCard, {alignItems: TitleCenter}]}>
          <Text
            title={CompanyName}
            type="regularFootnote2"
            style={styles.brandName}
          />
        </RN.View>
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default CompaniesCard;
