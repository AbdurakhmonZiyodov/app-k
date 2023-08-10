import RN from 'components/RN';
import UI from 'components/UI';
import {styles} from './CircleComponent.style';
import {IconType} from 'types';
import {FC} from 'react';
import {COLORS} from 'constants/colors';
import Images from 'assets/images';

type CircleProps = {
  title?: string;
  icon?: IconType;
  active?: boolean;
};
const data = [
  {
    title: 'ALl',
    icon: Images.Rectangle.img1,
    active: true,
  },
  {
    title: 'Restaraunts',
    icon: Images.Rectangle.img2,
    active: false,
  },
  {
    title: 'Shops',
    icon: Images.Rectangle.img3,
    active: false,
  },
  {
    title: 'Business',
    icon: Images.Rectangle.img4,
    active: false,
  },
  {
    title: 'Sport',
    icon: Images.Rectangle.img5,
    active: false,
  },
];

const CircleComponent: FC<CircleProps> = () => (
  <RN.View style={styles.container}>
    {data.map(item => (
      <RN.View key={item.title} style={styles.card}>
        <RN.View
          style={
            item.active
              ? [styles.circleBtn, {borderWidth: 1}]
              : styles.circleBtn
          }>
          <RN.Image source={item.icon} style={styles.imageSize} />
        </RN.View>
        <UI.Text
          title={item.title}
          style={
            item.active
              ? [styles.subtitle, {color: COLORS.green}]
              : styles.subtitle
          }
          type="regularCaption1"
        />
      </RN.View>
    ))}
  </RN.View>
);

export default CircleComponent;
