import Images from 'assets/images';
import RN from 'components/RN';
import {FC} from 'react';

type Props = {
  image1?: ReturnType<typeof require>;
  image2?: ReturnType<typeof require>;
};

const DoubleImgCard: FC<Props> = ({image1, image2}) => {
  const Image1 = image1 || Images.BurgerImg.img1;
  const Image2 = image2 || Images.BurgerImg.img2;
  const DefaultImgHeight = 40;
  const ImgWidth = DefaultImgHeight * 2;
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.circleImgCardOne}>
        <RN.Image
          source={Image1}
          resizeMode="contain"
          style={{width: ImgWidth, height: DefaultImgHeight}}
        />
      </RN.View>
      <RN.View style={styles.circleImgCardTwo}>
        <RN.Image
          source={Image2}
          resizeMode="contain"
          style={{width: ImgWidth, height: DefaultImgHeight}}
        />
      </RN.View>
    </RN.View>
  );
};

export default DoubleImgCard;

const styles = RN.StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    width: '25%',
  },
  circleImgCardOne: {
    width: 38,
    height: 38,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleImgCardTwo: {
    position: 'absolute',
    left: 32,
    width: 38,
    height: 38,
    borderRadius: 38,
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
});
