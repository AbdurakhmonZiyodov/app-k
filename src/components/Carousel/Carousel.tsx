import RN from 'components/RN';
import {FC, ReactNode, useRef, useState} from 'react';
import {ListRenderItem, StyleProp, ViewStyle} from 'react-native';
import {styles} from './Carousel.styles';
import SNCarousel, {
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';

interface CarouselProps {
  data: readonly unknown[];
  sliderWidth?: number;
  itemWidth?: number;
  isVisible?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<unknown> &
    ((
      item: {
        item: unknown;
        index: number;
      },
      parallaxProps?: AdditionalParallaxProps | undefined,
    ) => ReactNode);
}

const Carousel: FC<CarouselProps> = ({
  data,
  sliderWidth,
  itemWidth,
  renderItem,
  isVisible = true,
  containerStyle,
}) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  if (!isVisible) return <RN.View />;
  return (
    <RN.View style={containerStyle}>
      <SNCarousel
        ref={carouselRef}
        data={data}
        layout={'default'}
        activeSlideOffset={index}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        loop
        onSnapToItem={(i: number) => setIndex(i)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        // @ts-ignore
        carouselRef={carouselRef}
        dotStyle={styles.dotStyle}
        containerStyle={styles.containerStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

      <RN.View style={styles.blurStyle} />
    </RN.View>
  );
};

export default Carousel;
