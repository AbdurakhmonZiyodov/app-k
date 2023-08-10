import OnBoarding from 'components/OnBoarding';
import RN from 'components/RN';
import {useRef, useState} from 'react';
import {Animated, FlatList, ViewToken} from 'react-native';
import Slides, {SlidesData} from 'screens/OnBoarding/Slider.data';
import {styles} from './OnBoardingScreen.style';
import NextButton from './components/NextButton';
import Paginator from './components/Paginator';
import IProvider from 'components/IProvider';

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const onScrollHandler = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {x: scrollX},
        },
      },
    ],
    {useNativeDriver: false},
  );

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) =>
      setCurrentIndex(() => viewableItems[0].index as number),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderItem = ({item}: {item: SlidesData}) => (
    <OnBoarding title={item.title} text={item.subtitle} source={item.source} />
  );

  return (
    <IProvider style={styles.container}>
      <RN.View style={styles.container}>
        <FlatList
          horizontal
          bounces={true}
          pagingEnabled
          data={Slides}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          onScroll={onScrollHandler}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <NextButton
          slidesRef={slidesRef}
          currentI={currentIndex}
          setCurrentI={setCurrentIndex}
        />
        <Paginator data={Slides} scrollX={scrollX} />
      </RN.View>
    </IProvider>
  );
};

export default OnBoardingScreen;
