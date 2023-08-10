import CustomModal from 'components/CustomModal';
import RN from 'components/RN';
import React, {FC} from 'react';
import Text from 'components/UI/components/Text';
import {styles} from './CompanySort.style';

interface Props {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  sortFuncAZ?: any;
  sortFuncZA?: any;
  sortFuncNew?: any;
  sortFuncOldest?: any;
}
const CompanySort: FC<Props> = ({
  isVisible,
  setIsVisible,
  sortFuncAZ,
  sortFuncZA,
  sortFuncNew,
  sortFuncOldest,
}) => (
  <RN.View style={styles.container}>
    <CustomModal visible={isVisible}>
      <RN.View />
      <RN.TouchableOpacity
        style={styles.sortBtn}
        onPress={() => {
          sortFuncAZ();
          setIsVisible(!isVisible);
        }}>
        <Text
          title="Sort by A - Z "
          type="regularCaption3"
          style={styles.btnTitle}
        />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity
        style={styles.sortBtn}
        onPress={() => {
          sortFuncZA();
          setIsVisible(!isVisible);
        }}>
        <Text
          title="Sort by Z - A "
          type="regularCaption3"
          style={styles.btnTitle}
        />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity
        style={styles.sortBtn}
        onPress={() => {
          sortFuncNew();
          setIsVisible(!isVisible);
        }}>
        <Text
          title="Sort by Newest first"
          type="regularCaption3"
          style={styles.btnTitle}
        />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity
        style={styles.sortBtn}
        onPress={() => {
          sortFuncOldest();
          setIsVisible(!isVisible);
        }}>
        <Text
          title="Sort by Oldest first"
          type="regularCaption3"
          style={styles.btnTitle}
        />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity
        style={styles.closeBtn}
        onPress={() => setIsVisible(!isVisible)}>
        <Text title="Close" type="boldCaption14" style={styles.closeBtnTitle} />
      </RN.TouchableOpacity>
    </CustomModal>
  </RN.View>
);

export default CompanySort;
