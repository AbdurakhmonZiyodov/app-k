import Images from 'assets/images';
import FrameComponent from 'components/FrameComponent';
import RN from 'components/RN';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {styles} from './ActivityTasks.style';
const ActivityTasksLIst = () => (
  <RN.View style={styles.ScrollView}>
    <RN.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}>
      <FrameComponent
        title="Tasks"
        backImg={Images.FrameImg.img1}
        backColor="#F5E243"
        navigateScreen={ACTIVITY_ROUTES.tasks}
      />
      <FrameComponent
        title="Voting"
        backImg={Images.FrameImg.img2}
        backColor="#802AD6"
        navigateScreen={ACTIVITY_ROUTES.votings}
      />
      <FrameComponent
        title="charity"
        backImg={Images.FrameImg.img3}
        backColor="#4BB6F3"
      />
      <FrameComponent
        title="Election"
        backImg={Images.FrameImg.img4}
        backColor="#E3771F"
      />
    </RN.ScrollView>
  </RN.View>
);

export default ActivityTasksLIst;
