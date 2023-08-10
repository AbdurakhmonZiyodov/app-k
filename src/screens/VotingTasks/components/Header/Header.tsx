import {Icons} from 'assets/icons';
import IHeader from 'components/Header';
import RN from 'components/RN';
import {COLORS} from 'constants/colors';
import {HIT_SLOP} from 'constants/constants';
import useRootStore from 'hooks/useRootStore';
import {FC} from 'react';
import {styles} from './Header.styles';

interface HeaderProps {
  title?: string;
  backgroundColor: string;
}

const Header: FC<HeaderProps> = ({title, backgroundColor}) => {
  const {share} = useRootStore().service.company;

  return (
    <RN.View style={[styles.container, {backgroundColor}]}>
      <IHeader
        leftIcon="ArrowLeft"
        title={title}
        renderRightHeader={() => (
          <RN.TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={() => {
              share.onPress().then(_ => {
                console.log(share.response);
              });
            }}>
            <Icons.Share color={COLORS.white} width={22} />
          </RN.TouchableOpacity>
        )}
      />
    </RN.View>
  );
};

export default Header;
