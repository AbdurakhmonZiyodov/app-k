import RN from 'components/RN';
import UI from 'components/UI';
import {ImageSourcePropType, StyleProp, TextStyle} from 'react-native';
import {FC} from 'react';
import {styles} from './OnBoarding.styles';

type OnBoardingProps = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  text: string;
  source: ImageSourcePropType;
};

const OnBoarding: FC<OnBoardingProps> = ({title, text, source}) => {
  const {width} = RN.useWindowDimensions();
  return (
    <RN.View style={[styles.container, {width}]}>
      <RN.View style={styles.imagebox}>
        <RN.Image style={styles.image} resizeMode="contain" source={source} />
      </RN.View>
      <RN.View style={styles.textsContainer}>
        <UI.Text
          style={styles.title}
          title={title}
          textPosition="center"
          type="onBoardingTitle"
        />
        <UI.Text
          style={styles.subtitle}
          title={text}
          textPosition="center"
          type="regularFootnote2"
        />
      </RN.View>
    </RN.View>
  );
};
export default OnBoarding;
