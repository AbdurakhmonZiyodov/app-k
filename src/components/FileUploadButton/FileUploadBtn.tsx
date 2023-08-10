import {Icons} from 'assets/icons';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {observer} from 'mobx-react-lite';
import {FC} from 'react';
import {styles} from './FileUploadBtn.style';

interface FileUploadBtnProps {
  onPress: () => void;
}

const FileUploadBtn: FC<FileUploadBtnProps> = ({onPress}) => (
  <RN.TouchableOpacity style={styles.container} onPress={onPress}>
    <Icons.Clip width={18} height={18} color={COLORS.green} />
  </RN.TouchableOpacity>
);

export default observer(FileUploadBtn);
