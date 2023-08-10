import DotsLottie from 'assets/animations/components/DotsLottie';
import RN from 'components/RN';
import {FC, useCallback, useState} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ButtonType, TextType} from 'types';
import Text from '../Text';

export type ButtonProps = {
  type?: ButtonType;
  onPress?: () => void;
  title: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleType?: TextType;
  titleStyle?: StyleProp<TextStyle>;
  labelType?: TextType;
  labelStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  textPosition?: 'flex-start' | 'flex-end' | 'center';
  isLoading?: boolean;
  isSmart?: boolean;
};

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  label,
  titleType = 'default',
  labelType,
  style,
  titleStyle,
  labelStyle,
  containerStyle,
  activeOpacity = 0.5,
  textPosition = 'flex-start',
  isSmart,
  isLoading = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const onPressHandle = useCallback(() => {
    if (isPressed && isSmart) return;

    onPress?.();
    if (isSmart) {
      setIsPressed(true);
    }
  }, [isPressed, onPress, isSmart]);

  const renderLoading = () => <DotsLottie />;

  const textContent = () => (
    <>
      <Text title={title} type={titleType} style={titleStyle} />
      {!!label && <Text title={label} style={labelStyle} type={labelType} />}
    </>
  );
  return (
    <RN.TouchableOpacity
      onPress={onPressHandle}
      disabled={isSmart && isPressed}
      style={style}
      activeOpacity={activeOpacity}>
      <RN.View style={[{alignItems: textPosition}, containerStyle]}>
        {(isPressed && isSmart) || isLoading ? renderLoading() : textContent()}
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default Button;
