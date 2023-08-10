import RN from 'components/RN';
import Text from 'components/UI/components/Text';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {IVotingStatus} from 'store/services/voting-tasks/VotingTasksStore';
import VotingItem from './VotingItem';
import {styles} from './VotingList.styles';

export interface VotingListItem {
  id: number;
  percent: number;
  source: ReturnType<typeof require>;
  name: string;
  isPressed: boolean;
}
interface VotingListProps {
  data: VotingListItem[];
}

const VotingList: FC<VotingListProps> = ({data}) => {
  const {onPressVoting, clean} = useRootStore().service.votingTasks;
  const votingStatus = useRef(
    new Animated.Value(IVotingStatus.status_0),
  ).current;

  useEffect(
    () => () => {
      clean();
    },
    [clean],
  );

  const onPress = (item: VotingListItem) => {
    onPressVoting(item);

    votingStatus.setValue(IVotingStatus.status_0);
    Animated.timing(votingStatus, {
      toValue: IVotingStatus.status_1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <RN.View style={styles.container}>
      <Text
        style={styles.titleText}
        title="Select answer"
        type="boldCaptionTitle"
      />
      <RN.FlatList
        keyExtractor={(_, key) => key.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.votingListContainer}
        renderItem={item => (
          <VotingItem
            {...item.item}
            votingStatus={votingStatus}
            onPress={() => onPress(item.item)}
          />
        )}
        data={data}
      />
    </RN.View>
  );
};
export default observer(VotingList);
