import Images from 'assets/images';
import RN from 'components/RN';
import UI from 'components/UI';
import {styles} from './RectangleWidgets.styles';
const RectangleWidgets = () => {
  const RectangleCenterBtn = () => (
    <RN.View style={styles.centerCard}>
      <RN.Image source={Images.DaoPasswordImg.img1} style={styles.daoImg} />
    </RN.View>
  );

  const DaoFavoritesCard = () => (
    <RN.View style={styles.DaoFavoriteCard}>
      <UI.Text
        title="DAO favorites"
        style={styles.title}
        type="regularCaption1"
      />
    </RN.View>
  );

  const ResultForMonth = () => (
    <RN.View style={styles.resultCard}>
      <UI.Text
        title="Result for month"
        type="regularCaption1"
        style={styles.title}
      />
      <UI.Text title="+23,5%" type="boldHeadline1" style={styles.subtitle} />
    </RN.View>
  );
  return (
    <RN.View style={styles.container}>
      <DaoFavoritesCard />
      <RectangleCenterBtn />
      <ResultForMonth />
    </RN.View>
  );
};

export default RectangleWidgets;
