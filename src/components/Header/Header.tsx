import {Icons} from 'assets/icons';
import RN from 'components/RN';
import UI from 'components/UI';
import Text from 'components/UI/components/Text';
import {COLORS} from 'constants/colors';
import NavigationService from 'navigation/NavigationService';
import React, {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconType} from 'types';
import {styles} from './Header.styles';

const deafultOption = {
  width: 20,
  color: COLORS.white,
};

type HeaderProps = {
  leftIcon?: IconType;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIcon?: IconType;
  rightIconStyle?: StyleProp<ViewStyle>;
  rightButtonTitle?: string;
  renderRightSection?(): React.ReactNode;
  tokenBalance?: string;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  headerStyle?: StyleProp<TextStyle>;
  iconOption?: typeof deafultOption;
  renderRightHeader?(): React.ReactNode;
};

const Header: FC<HeaderProps> = ({
  leftIcon,
  leftIconStyle,
  rightIcon,
  rightIconStyle,
  title,
  titleStyle,
  onLeftIconPress,
  onRightIconPress,
  rightButtonTitle,
  headerStyle,
  iconOption,
  tokenBalance,
  renderRightHeader,
}) => {
  const LeftIcon = Icons[leftIcon as IconType];
  const RightIcon = Icons[rightIcon as IconType];

  const goBack = () => {
    if (onLeftIconPress) return onLeftIconPress();

    return NavigationService.goBack();
  };
  const iconStyle = {
    ...deafultOption,
    ...iconOption,
  };
  const leftRenderIcon = () => {
    if (!leftIcon) return <RN.View />;
    return (
      <RN.TouchableOpacity
        activeOpacity={0.5}
        style={leftIconStyle}
        onPress={goBack}>
        <LeftIcon {...iconStyle} />
      </RN.TouchableOpacity>
    );
  };
  const renderRightIcon = () => {
    if (!rightIcon) return <RN.View />;
    return (
      <RN.TouchableOpacity
        activeOpacity={0.5}
        onPress={onRightIconPress}
        style={rightIconStyle}>
        <RightIcon {...iconStyle} />
      </RN.TouchableOpacity>
    );
  };

  const rightView = () => (
    <RN.View style={styles.headerRightView}>
      {tokenBalance ? (
        <RN.View style={styles.tokenBalance}>
          <Text
            title={tokenBalance}
            style={styles.tokenbalanceTitle}
            type="boldCaption14"
          />
        </RN.View>
      ) : (
        <RN.View>
          <Text title={rightButtonTitle} style={styles.rightBtnTitle} />
        </RN.View>
      )}
    </RN.View>
  );

  return (
    <RN.View style={[styles.container, headerStyle]}>
      {leftRenderIcon?.()}
      <RN.View style={[styles.headerTitleCard]}>
        <UI.Text
          title={title}
          style={[styles.headerTitle, titleStyle]}
          textPosition="center"
          type="headerTitle"
        />
      </RN.View>
      {renderRightHeader
        ? renderRightHeader()
        : rightButtonTitle || tokenBalance
        ? rightView?.()
        : renderRightIcon?.()}
    </RN.View>
  );
};

export default Header;
