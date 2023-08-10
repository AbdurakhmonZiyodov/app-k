import React, {FC} from 'react';
import RN from 'components/RN';
import {styles} from './CustomModal.style';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const CustomModal: FC<ModalProps> = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new RN.Animated.Value(0)).current;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      RN.Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      RN.Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  React.useEffect(() => {
    toggleModal();
  }, [toggleModal, visible]);

  return (
    <RN.Modal transparent visible={showModal}>
      <RN.View style={styles.modalBackGround}>
        <RN.Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </RN.Animated.View>
      </RN.View>
    </RN.Modal>
  );
};
export default CustomModal;
