import {useIsFocused, useRoute} from '@react-navigation/native';
import {LikeLottieRefProps} from 'assets/animations/components/LikeLottie';
import SvgImage from 'assets/svgImages/index';
import Header from 'components/Header';
import IProvider from 'components/IProvider';
import BannerTokens from 'components/RewardWidgets/components/BannerTokens';
import RN from 'components/RN';
import ScreenTitle from 'components/ScreenTitle';
import TimeToOver from 'components/TimetoOver/TimetoOver';
import PrimaryButtonLarge from 'components/UI/components/PrimaryButton/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import {addAlpha, ScrollViewPadding} from 'constants/constants';
import SIZES from 'constants/sizes';
import useRootStore from 'hooks/useRootStore';
import {observer} from 'mobx-react-lite';
import {ActivityRouteType} from 'navigation/BottomTabNavigation/stacks/Activitiy/ActivitiyStack';
import {ACTIVITY_ROUTES} from 'navigation/routes';
import {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Reward} from 'services/api';
import {ButtonType} from 'types';
import {styles} from './NewTaskScreen.style';

const NewTaskScreen = () => {
  const {getAllTasks, findOneTask} = useRootStore().service.activity;
  const {
    file,
    onSend,
    share,
    textInput,
    onChangeTextInput,
    postSubmissionOperation,
  } = useRootStore().service.newTasks;
  const {findOneCompany} = useRootStore().service.company;
  const route = useRoute<ActivityRouteType<ACTIVITY_ROUTES.tasks_recomended>>();
  const taskId = route.params.id;
  const taskData = findOneTask(taskId);
  const companyData = findOneCompany(taskData.companyId);

  const likeRef = useRef<LikeLottieRefProps>(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && likeRef.current) {
      likeRef.current.onStart?.();
      getAllTasks([taskData.companyId]);
    }
  }, [taskData.companyId, getAllTasks, isFocused]);

  const headerBackground = () => (
    <RN.View style={styles.headerContent}>
      <RN.Image
        source={{uri: companyData.logo}}
        style={styles.headerlogo}
        resizeMode={'contain'}
      />
      <Text
        title={`+${taskData.reward?.value} TOKENS FOR VOTING`}
        style={styles.subtitle}
        type="boldSmall"
      />
      <Text
        style={styles.headerText}
        title={taskData.summary}
        type="boldTitle1"
      />
    </RN.View>
  );
  const aboutCard = () => (
    <RN.View style={styles.aboutCard}>
      <RN.View style={styles.bannerToken}>
        <TimeToOver timeToOver={taskData.endDateTime as string} />
        <BannerTokens tokens={taskData.reward as Reward} />
      </RN.View>

      <Text
        title={companyData.description}
        style={styles.aboutText}
        type="regularFootnote2"
      />
    </RN.View>
  );

  const taskDataSection = () => (
    <RN.View style={styles.taskDataCard}>
      <ScreenTitle title="Task data" style={styles.screenTitle} />
      <RN.TextInput
        style={styles.inputStyle}
        placeholder="Type about task"
        placeholderTextColor={COLORS.grey}
        numberOfLines={4}
        multiline
        value={textInput}
        onChangeText={onChangeTextInput}
      />
      <RN.View style={styles.btnCard}>
        <RN.TouchableOpacity style={styles.fileUpload} onPress={file.onPress}>
          <SvgImage.FileUpload1
            width={SIZES.width * 0.07}
            height={SIZES.width * 0.07}
          />
          <Text
            title="Upload file"
            style={styles.fileUploadText}
            type="regularFootnote2"
          />
        </RN.TouchableOpacity>
        <PrimaryButtonLarge
          title="Send"
          onPress={() => onSend(taskId)}
          isLoading={postSubmissionOperation.isInProgress}
          type={ButtonType.FILLED}
          style={styles.buttonStyle}
          titleStyle={{color: COLORS.black}}
        />
        {/* <FileUploadBtn onPress={file.onPress} /> */}
      </RN.View>
    </RN.View>
  );

  return (
    <IProvider backgroundColor={companyData.backgroundColor}>
      <RN.View style={styles.screen}>
        <RN.View style={styles.headerStyle}>
          <Header
            title="Tasks"
            leftIcon="ArrowLeft"
            rightIcon="Share"
            onRightIconPress={() =>
              share
                .onPress()
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                })
            }
          />
        </RN.View>
        <RN.ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{...ScrollViewPadding}}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <LinearGradient
            useAngle={true}
            angle={180}
            locations={[0, 1]}
            colors={[
              companyData.backgroundColor,
              addAlpha(companyData.backgroundColor, 0),
            ]}
            style={styles.linearGradientContainer}>
            {headerBackground()}
          </LinearGradient>
          <RN.View style={styles.container}>
            {aboutCard()}
            {taskDataSection()}
          </RN.View>
        </RN.ScrollView>
      </RN.View>
    </IProvider>
  );
};
export default observer(NewTaskScreen);
