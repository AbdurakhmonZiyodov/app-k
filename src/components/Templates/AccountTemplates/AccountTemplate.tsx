import LogOutIcon from 'assets/icons/LogOutIcon';
import Header from 'components/Header';
import RN from 'components/RN';
import LargeButton from 'components/UI/components/PrimaryButton/PrimaryButtonLarge/PrimaryButtonLarge';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import useRootStore from 'hooks/useRootStore';
import React, {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ButtonType} from 'types';
import {styles} from './AccountTemplates.style';

interface AccountTemplateProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  goBack?: () => void;
  renderRight?(): React.ReactNode;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  renderBtnTitle?: string;
  bottomBtnFunc?: () => void;
  children: React.ReactNode;
}

const AccountTemplate: FC<AccountTemplateProps> = ({
  title,
  children,
  titleStyle,
  style,
  headerStyle,
  renderBtnTitle,
  bottomBtnFunc,
  renderRight,
}) => {
  const token = useRootStore()._token;

  const renderHeader = () => {
    if (!title) return <RN.View />;
    return (
      <Header
        title={title}
        leftIcon="ArrowLeft"
        headerStyle={headerStyle}
        titleStyle={[styles.headerStyle, titleStyle]}
        renderRightHeader={renderRight}
      />
    );
  };

  const renderLogOutBtn = () => (
    <RN.TouchableOpacity style={styles.logOutBtn} onPress={token.clear}>
      <LogOutIcon height={24} color={COLORS.black} width={24} />
      <Text
        title="Logout"
        textPosition="center"
        type="regularCallout"
        style={styles.logoutBtnTitle}
      />
    </RN.TouchableOpacity>
  );

  const renderOtherBtn = () => (
    <RN.View style={styles.renderBtn}>
      <LargeButton
        type={ButtonType.FILLED}
        title={renderBtnTitle ?? ''}
        textPosition="center"
        titleStyle={{color: COLORS.black}}
        titleType="regularCallout"
        style={{backgroundColor: COLORS.green}}
        onPress={bottomBtnFunc}
      />
    </RN.View>
  );

  return (
    <RN.View style={[styles.flexOne, style]}>
      {renderHeader?.()}
      <RN.View style={styles.childrenView}>{children}</RN.View>
      <RN.View>
        {renderBtnTitle ? renderOtherBtn?.() : renderLogOutBtn()}
      </RN.View>
    </RN.View>
  );
};

export default AccountTemplate;
