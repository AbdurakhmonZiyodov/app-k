import LikeLottie, {
  LikeLottieRefProps,
} from 'assets/animations/components/LikeLottie';
import ColoredIcons from 'assets/coloredIcons';
import RN from 'components/RN';
import TimetoOver from 'components/TimetoOver';
import Text from 'components/UI/components/Text';
import {HIT_SLOP} from 'constants/constants';
import {FC, useEffect, useRef} from 'react';
import {ActivityBase} from 'services/api';
import {styles} from './AboutVote.styles';

interface AboutVoteProps {
  data: ActivityBase;
}

const AboutVote: FC<AboutVoteProps> = ({data}) => {
  const likeRef = useRef<LikeLottieRefProps>(null);

  useEffect(() => {
    if (likeRef.current) {
      likeRef.current.onStart?.();
    }
  }, []);
  return (
    <>
      <RN.View style={styles.container}>
        <Text title="ABOUT VOTING" style={styles.titleText} type="boldSmall" />
        <RN.View style={styles.mainContent}>
          <Text
            title="English professional football club based in Fulham, southwest London. It plays in the English Premier League, the top division in the English football league system. Founded in 1905."
            style={styles.descriptionText}
            type="regularCaption1"
          />

          <RN.TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={() => {
              console.log('toggle');
              likeRef.current?.onToggle?.();
            }}
            style={styles.likeContainer}>
            <LikeLottie ref={likeRef} width={60} height={60} />
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>

      <RN.View style={styles.peopleVote}>
        <RN.View>
          <Text
            title="people vote"
            type="boldCaption1"
            style={styles.peopleVoteText}
          />
          <ColoredIcons.PeopleVotingIcon width={64} />
        </RN.View>

        <TimetoOver timeToOver={data.endDateTime as string} />
      </RN.View>
    </>
  );
};

export default AboutVote;
