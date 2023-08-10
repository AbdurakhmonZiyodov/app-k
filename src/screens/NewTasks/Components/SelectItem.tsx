import {Icons} from 'assets/icons';
import Images from 'assets/images';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {FC} from 'react';
import {IconType} from 'types';

type Props = {
  onPress?: () => void;
  image?: string;
  title?: string;
  rightIcon?: IconType;
};

const SelectItem: FC<Props> = ({onPress, image, rightIcon, title}) => {
  const RightIcon = rightIcon ? Icons[rightIcon] : Icons.Plus;
  const Title = title ? title : 'Burger';
  const Image = image ? image : Images.BurgerImg.img3;
  return (
    <RN.TouchableOpacity style={styles.container} onPress={onPress}>
      <RN.View style={styles.leftCard}>
        <RN.Image source={Image} style={styles.imageStyle} resizeMode="cover" />
        <Text title={Title} type="boldCaption1" style={styles.title} />
      </RN.View>
      <RN.View style={styles.rightCard}>
        <RightIcon width={15} height={15} color={COLORS.white} />
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default SelectItem;

const styles = RN.StyleSheet.create({
  container: {
    height: 53,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
  },
  leftCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    marginLeft: 11,
  },
  imageStyle: {
    width: 40,
    height: 37,
    borderRadius: 10,
  },
  rightCard: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
