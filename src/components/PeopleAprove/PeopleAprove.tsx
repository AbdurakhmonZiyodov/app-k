import {Icons} from 'assets/icons';
import Images from 'assets/images';
import RN from 'components/RN';
import UI from 'components/UI';
import {COLORS} from 'constants/colors';
import {styles} from './PeopleAprove.styles';

const PeopleAprove = () => {
  const peopleAproveImg = () => (
    <RN.View style={styles.peopleAproveImages}>
      <RN.Image
        source={Images.PropleAproveImg.img4}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <RN.Image
        source={Images.PropleAproveImg.img2}
        resizeMode="cover"
        style={[styles.imageStyle, {left: 10}]}
      />
      <RN.Image
        source={Images.PropleAproveImg.img1}
        resizeMode="cover"
        style={[styles.imageStyle, {left: 25, zIndex: 3}]}
      />
      <RN.Image
        source={Images.PropleAproveImg.img3}
        resizeMode="cover"
        style={[styles.imageStyle, {left: 40}]}
      />
    </RN.View>
  );
  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.peopleAprove}>
        <Icons.Like color={COLORS.lightgrey} width={8.5} />
        <UI.Text
          title="people aprove"
          style={styles.aproveTitle}
          type="boldSmall"
        />
      </RN.View>
      <RN.View style={styles.bottomAprove}>
        {peopleAproveImg()}
        <RN.View style={styles.aproveCount}>
          <UI.Text
            title="9700/"
            style={styles.aproveSubtitle}
            type="regularCaption1"
          />
          <UI.Text title="9800" style={styles.aproveSubtitle} />
        </RN.View>
      </RN.View>
    </RN.View>
  );
};

export default PeopleAprove;
