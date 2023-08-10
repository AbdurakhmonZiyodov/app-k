import Text from 'components/UI/components/Text';
import {SafeInsetHelper} from 'helpers/SafeInsetHelper';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import {IHandles} from 'react-native-modalize/lib/options';
import {Portal} from 'react-native-portalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './SwipeableModal.styles';

interface ISwipeableModalProps extends ModalizeProps {
  children: React.ReactNode | React.ReactNode[];
  modalizeRef: React.RefObject<IHandles>;
  title?: string;
  isFullScreen?: boolean;
  isSwipe?: boolean;
  isShowHeader?: boolean;
  HeaderRightComponent?: React.ReactNode | null;
  backgroundColor?: string;
  isPaddingBottomOfContainer?: boolean;
}

const SwipeableModal: FC<ISwipeableModalProps> = ({
  children,
  modalizeRef,
  title,
  isSwipe = true,
  isShowHeader = true,
  HeaderComponent,
  HeaderRightComponent,
  scrollViewProps,
  adjustToContentHeight = true,
  backgroundColor,
  isFullScreen,
  isPaddingBottomOfContainer = false,
  ...resOfProps
}) => {
  const insets = useSafeAreaInsets();

  // Renders
  const renderDefaultHeader = () => (
    <View style={[styles.modalHeader, {backgroundColor}]}>
      <Text
        style={styles.modalHeaderTitle}
        title={title}
        type="boldCaptionTitle"
      />

      <View>{HeaderRightComponent}</View>
    </View>
  );

  const renderHeader = () => {
    if (!isShowHeader) {
      return;
    }

    if (HeaderComponent) {
      return HeaderComponent;
    }

    return renderDefaultHeader();
  };

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        withHandle={false}
        closeOnOverlayTap
        tapGestureEnabled
        disableScrollIfPossible={false}
        // closeAnimationConfig={{
        //   spring: {stiffness: 70, mass: 0.2},
        //   timing: {delay: 0, duration: 500},
        // }}
        // openAnimationConfig={{
        //   spring: {stiffness: 70, mass: 0.2},
        //   timing: {delay: 0, duration: 300},
        // }}
        adjustToContentHeight={adjustToContentHeight}
        panGestureComponentEnabled
        {...resOfProps}
        HeaderComponent={renderHeader()}
        panGestureEnabled={isSwipe}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          style: {
            backgroundColor,
          },
          contentContainerStyle: [
            isPaddingBottomOfContainer && {
              paddingBottom: SafeInsetHelper.getSafeBottomInset({
                insets,
                minimumValue: 25,
              }),
            },
            isFullScreen && {minHeight: '100%'},
            {backgroundColor},
          ],
          // contentContainerStyle: [
          //   { paddingBottom: insets.bottom },
          //   isFullScreen && { flexGrow: 1, paddingBottom: insets.bottom },
          // ],
          ...scrollViewProps,
        }}>
        {children}
      </Modalize>
    </Portal>
  );
};

export default SwipeableModal;
