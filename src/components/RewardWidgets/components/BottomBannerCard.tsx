import Images from 'assets/images';
import PeopleAprove from 'components/PeopleAprove';
import RN from 'components/RN';
import TimetoOver from 'components/TimetoOver';
import {FC} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ActivityType} from 'services/api';
import DoubleImgCard from './DoubleImgCard';

type Props = {
  widgetsType: ActivityType;
  peopleAprove?: any;
  timeToOver?: string;
  image1?: ImageSourcePropType;
  image2?: ImageSourcePropType;
};

const BottomBannerCard: FC<Props> = ({
  image1,
  image2,
  timeToOver,
  peopleAprove,
  widgetsType,
}) => {
  const IMAGE1 = image1 ? image1 : Images.BurgerImg.img1;
  const IMAGE2 = image2 ? image2 : Images.BurgerImg.img2;

  const peopleAproveView = () => {
    if (!peopleAprove) return <RN.View />;
    return <PeopleAprove />;
  };

  const timeToOverView = () => {
    if (!timeToOver) return <RN.View />;
    return <TimetoOver timeToOver={timeToOver} />;
  };

  const doubleImgView = () => <DoubleImgCard image1={IMAGE1} image2={IMAGE2} />;

  return (
    <RN.View>
      {widgetsType === ActivityType.TASK ? (
        <RN.View style={styles.tasksView}>
          {timeToOverView?.()}
          {peopleAproveView?.()}
        </RN.View>
      ) : (
        <RN.View style={styles.votingsView}>
          {doubleImgView?.()}
          {peopleAproveView?.()}
          {timeToOverView?.()}
        </RN.View>
      )}
    </RN.View>
  );
};
export default BottomBannerCard;

const styles = RN.StyleSheet.create({
  tasksView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  votingsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
