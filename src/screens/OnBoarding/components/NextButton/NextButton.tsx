import ArrowLeftIcon from 'assets/icons/ArrowLeftIcon';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import NavigationService from 'navigation/NavigationService';
import {APP_ROUTES} from 'navigation/routes';
import React, {FC, useRef, useEffect} from 'react';
import {Animated, FlatList} from 'react-native';
import {Svg, G, Circle} from 'react-native-svg';
import Slides from 'screens/OnBoarding/Slider.data';
import {styles} from './nextButton.style';

type NextButtonProps = {
  slidesRef: React.RefObject<FlatList<any>>;
  currentI: number;
  setCurrentI: any;
};

const NextButton: FC<NextButtonProps> = ({
  slidesRef,
  currentI,
  setCurrentI,
}) => {
  const size = 50;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const percentage = (currentI + 1) * (100 / Slides.length);

  const animation = (toValue: any) =>
    Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    animation(percentage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      if (progressRef?.current) {
        //@ts-ignore
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  const scrollTo = () => {
    if (currentI < Slides.length - 1 && currentI <= 3) {
      //@ts-ignore
      slidesRef.current.scrollToIndex({index: currentI + 1});
    } else {
      console.log('Last time');
    }
  };

  const handleNextButton = () => {
    if (currentI === 2) {
      NavigationService.navigate(APP_ROUTES.login);
    }
  };

  return (
    <RN.View style={styles.nextbuttonbox}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke={COLORS.darkgrey}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.green}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <RN.TouchableOpacity
        onPress={() => {
          scrollTo();
          //TODO next screen
          handleNextButton();
          setCurrentI(currentI + 1);
        }}
        style={styles.arrowIcon}>
        <ArrowLeftIcon width={24} color={COLORS.black} />
      </RN.TouchableOpacity>
    </RN.View>
  );
};

export default NextButton;
