import ColoredIcons from 'assets/coloredIcons/ColoredIcons';
import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';

import {Animated} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {IVotingStatus} from 'store/services/voting-tasks/VotingTasksStore';
import {VotingListItem} from './VotingList';
import {VOTING_IMAGE_SIZE} from './VotingList.contants';
import {styles} from './VotingList.styles';

interface VotingItem extends VotingListItem {
  votingStatus: Animated.Value;
  onPress(): void;
}

const AnimatedStop = Animated.createAnimatedComponent(Stop);
const VotingItem: FC<VotingItem> = ({
  name,
  onPress,
  percent,
  source,
  votingStatus,
  isPressed,
}) => {
  const firstInputRange = [IVotingStatus.status_0, IVotingStatus.status_1];
  const {votingList} = useRootStore().service.votingTasks;
  const maxPercent = Math.max(...votingList.map(i => i.percent));
  //   const isPressedSomeOne = votingList.some(i => i.isPressed);

  const animatedWith = votingStatus.interpolate({
    inputRange: firstInputRange,
    outputRange: [0, isPressed ? 0 : VOTING_IMAGE_SIZE],
    extrapolate: 'clamp',
  });

  const animagedOffset = votingStatus.interpolate({
    inputRange: firstInputRange,
    outputRange: [0, isPressed ? percent / maxPercent : 0],
    extrapolate: 'clamp',
  });

  const votedOpacitiy = votingStatus.interpolate({
    inputRange: firstInputRange,
    outputRange: [0, isPressed ? 1 : 0],
    extrapolate: 'clamp',
  });

  return (
    <RN.TouchableOpacity
      activeOpacity={0.5}
      style={styles.votingItem}
      onPress={onPress}>
      <RN.View style={styles.votingImageContainer}>
        <RN.Image
          source={source}
          blurRadius={0}
          resizeMode="cover"
          style={styles.votingItemImage}
        />

        <Animated.View
          style={[styles.votingItemImageShadow, {width: animatedWith}]}
        />
      </RN.View>

      <RN.View style={styles.textsContainer}>
        {/* {isPressedSomeOne && (
          <Text
            style={styles.percentText}
            title={`${percent}%`}
            type="boldTitle2_2"
          />
        )} */}
        <Text
          title={name}
          style={styles.votingItemNameText}
          type="boldCaption14"
        />
      </RN.View>

      <Animated.View style={[styles.votingItemShadow]}>
        <Svg width={'100%'} height={'100%'} fill="none">
          <Rect width={358} height={'100%'} rx={10} fill="#1B1B1B" />
          <Rect width={358} height={'100%'} rx={10} fill="url(#a)" />
          <Defs>
            <LinearGradient
              id="a"
              x1={-175}
              y1={56.5}
              x2={394}
              y2={56.5}
              gradientUnits="userSpaceOnUse">
              <AnimatedStop stopColor="#ADFE37" />
              <AnimatedStop
                offset={animagedOffset}
                stopColor="#ADFE37"
                stopOpacity={0}
              />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>

      <Animated.View style={[styles.votedContainer, {opacity: votedOpacitiy}]}>
        <ColoredIcons.CheckOutlineIcon width={17} />
        <Text title={'Voted'} style={styles.votingText} type="boldCaption14" />
      </Animated.View>
    </RN.TouchableOpacity>
  );
};

export default observer(VotingItem);
