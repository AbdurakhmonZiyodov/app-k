import RN from 'components/RN';
import React, {FC} from 'react';
import {Animated} from 'react-native';
import {SlidesData} from '../../Slider.data';
import {styles} from './Paginator.styles';

type PaginatorProps = {
  data: SlidesData[];
  scrollX: Animated.Value;
};

const Paginator: FC<PaginatorProps> = ({data, scrollX}) => {
  const {width} = RN.useWindowDimensions();

  return (
    <RN.View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWitdh = scrollX.interpolate({
          inputRange,
          outputRange: [6, 6, 6],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 4, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <RN.Animated.View
            style={[styles.dot, {width: dotWitdh, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </RN.View>
  );
};

export default Paginator;
