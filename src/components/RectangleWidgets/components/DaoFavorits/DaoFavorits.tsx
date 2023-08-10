import Images from 'assets/images';
import RN from 'components/RN';
import UI from 'components/UI';
import {styles} from './DaoFavorits.styles';
const DaoFavorite = () => {
  const data = [
    {
      name: 'Barcelone',
      img: Images.DaoPasswordImg.img2,
    },
    {
      name: 'Bavariya',
      img: Images.DaoPasswordImg.img3,
    },
    {
      name: 'Chalse',
      img: Images.DaoPasswordImg.img4,
    },
  ];
  type dataProps = {
    name: string;
    img: any;
  };

  const CirleCard = (item: dataProps) => (
    <RN.View style={styles.cirleCard}>
      <RN.Image source={item.img} />
    </RN.View>
  );

  return (
    <RN.View>
      <UI.Text />
      <CirleCard item={data[0]} />
      <CirleCard item={data[1]} />
      <CirleCard item={data[2]} />
    </RN.View>
  );
};

export default DaoFavorite;
