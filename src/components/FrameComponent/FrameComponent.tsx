import {useNavigation} from '@react-navigation/native';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import {NavigationType} from 'navigation/AppNavigator';
import {FC, useCallback} from 'react';
import {styles} from './FrameComponent.style';

type Props = {
  title: string;
  backImg: any;
  backColor?: string;
  navigateScreen?: any;
};

const FrameComponent: FC<Props> = ({
  title,
  backImg,
  backColor,
  navigateScreen,
}) => {
  const navigation = useNavigation<NavigationType>();
  const navigateToNextScreen = useCallback(() => {
    navigation.navigate(navigateScreen);
  }, [navigateScreen, navigation]);

  return (
    <RN.TouchableOpacity
      style={[styles.container, {backgroundColor: backColor}]}
      onPress={() => {
        navigateScreen ? navigateToNextScreen() : null;
      }}>
      <RN.Image source={backImg} style={styles.image} />
      <Text title={title} style={styles.title} type="boldTitle3" />
    </RN.TouchableOpacity>
  );
};

export default FrameComponent;
